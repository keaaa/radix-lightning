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
      current: {
        ExpectedHoursWorked: '7.5',
      },
    };
  }

  componentDidMount() {
    const service = TimewritingService();
    service.fetchDate(this.state.date)
      .then(result => {
        this.setState({ current: result })
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
    this.setState({showAddHours: true, showSetWbs: false});
  }

  showSetWbs = () => {
    this.setState({showAddHours: false, showSetWbs: true});
  }

  closeAddHours = () => {
    this.setState({showAddHours: false, showSetWbs: false})
  }

  render() {
    return (
      <Container>
        <Hours show={this.state.showAddHours} close={this.closeAddHours} next={this.showSetWbs} />
        <Wbs show={this.state.showSetWbs} close={this.closeAddHours} save={this.closeAddHours} />
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
