/* eslint-disable no-console */
import React, { Component } from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';
import TimewritingService from './Service';
import TimeEntries from './TimeEntries';
import Header from './Header';
import Hours from './Hours';
import Wbs from './Wbs';
import moment from 'moment';

class Day extends Component {
  constructor() {
    super();
    this.lunch = 30;
    this.startTime = 8;

    this.state = {
      hours: 0,
      from: '',
      to: '',
      date: '2019-02-15',
      showAddHours: false,
      showSetWbs: false,
      addHours: 0, 
      wbs: '',
      wbsList: [],
      current: {
        ExpectedHoursWorked: '7.5',
      },
    };
  }

  componentDidMount() {
    const service = TimewritingService();
    service.fetchDate(this.state.date)
      .then(result => {
        this.setState({ current: result, wbsList: result.TimeEntries.results.map(entries => entries.CostObjectId) })
        this.updateHours(result.ExpectedHoursWorked)
      });
  }

  updateHours = (newValue) => {
    const nrHours = parseFloat(newValue);
    const min = nrHours * 60 + 30;
    const from = moment(this.state.date).hour(this.startTime);
    const to = moment(this.state.date).hour(this.startTime).add(min, 'minutes');
    this.setState({ hours: nrHours, from: from, to: to });
  }

  showAddHours = () => {
    const hoursLeft = parseFloat(this.state.current.ExpectedHoursWorked) - parseFloat(this.state.current.ActualHoursWorked);
    this.setState({showAddHours: true, showSetWbs: false, addHours: hoursLeft > 0 ? hoursLeft : 0, wbs: ''});
  }

  showSetWbs = () => {
    this.setState({showAddHours: false, showSetWbs: true});
  }

  closeAddHours = () => {
    this.setState({showAddHours: false, showSetWbs: false, addHours: 0, wbs: ''});
  }

  updateAddHours = (input) => {
    this.setState({addHours: input.target.value})
  }

  saveAddHours = () => {
    console.log("hours: " + this.state.addHours + " wbs: " + this.state.wbs);
    this.closeAddHours();
  }

  render() {
    return (
      <Container>
        <Hours 
          show={this.state.showAddHours} 
          close={this.closeAddHours} 
          next={this.showSetWbs} 
          hours={this.state.addHours} 
          updateAddHours={this.updateAddHours} 
          linkInputBox={this.linkToHoursTxBox} 
        />
        <Wbs 
          show={this.state.showSetWbs} 
          close={this.closeAddHours} 
          save={this.saveAddHours} 
          wbsList={this.state.wbsList}
        />
        <Form>
          <br />
          <Header from={this.state.from} to={this.state.to} date={this.state.date} lunch={this.lunch} expectedHoursWorked={this.state.current.ExpectedHoursWorked} />
          {
            this.state.current.TimeEntries 
              ? <TimeEntries timeEntries={this.state.current.TimeEntries.results} />
              : <div />
          }
          <Button variant="primary" style={{width: '90vw'}} onClick={this.showAddHours}>Add hours</Button>
        </Form>
      </Container>
    );
  }
}

export default Day;
