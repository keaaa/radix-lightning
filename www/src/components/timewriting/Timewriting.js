/* eslint-disable no-console */
import React, { Component } from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';
import TimewritingService from './Service';
import TimeEntries from './TimeEntries';
import Header from './Header';
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
      current: {
        ExpectedHoursWorked: '7.5',
      },
    };
  }

  componentDidMount() {
    this.loadCurrent();
  }

  loadCurrent = () => {
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

  render() {
    return (
      <Container>
        <Form>
          <br />
          <Header from={this.state.from} to={this.state.to} date={this.state.date} lunch={this.lunch} expectedHoursWorked={this.state.current.ExpectedHoursWorked} />
          {
            this.state.current.TimeEntries 
              ? <TimeEntries timeEntries={this.state.current.TimeEntries.results} />
              : <div />
          }
          <Form.Group controlId="formActions">
            <Form.Row>
              <Col>
                <Button variant="primary" type="submit">Add hours</Button>
              </Col>
              <Col>
                <Button variant="primary" type="submit">Save</Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Day;
