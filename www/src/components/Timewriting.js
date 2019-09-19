/* eslint-disable no-console */
import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import moment from 'moment';

class Day extends Component {
  constructor() {
    super();
    this.lunch = 30;

    this.state = {
      hours: 0,
      from: '',
      to: '',
      date: '2019-01-30',
      current: {
        ExpectedHoursWorked: '7.5',
      },
    };
  }

  componentDidMount() {
    this.loadCurrent();
  }

  loadCurrent = () => {
    const date = moment(this.state.date);
    const url = `/api/v1/hours-for-day/${date.year()}/${date.month()+1}/${date.date()}`;
    fetch(url, {
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiI2ZTg4YTU5MS0xNmZhLTRiZWQtOTY5Yi0xMzY0YjU1MzA0NDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNTY4ODc2NjgwLCJuYmYiOjE1Njg4NzY2ODAsImV4cCI6MTU2ODg4MDU4MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhNQUFBQTBYZHA3N0Y5bEtRZDZMbmlOZ1Q1OElEYUp5RGY5MFFJL3pjMS9mZ2lTYXc9IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijc1NGY0MGJjLWVkZDgtNDViNS04N2NhLTkwMjI0MjcxMDk3NyIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiQW5kYSIsImdpdmVuX25hbWUiOiJLamVsbCBFcmlrIFJlZWQiLCJpcGFkZHIiOiI3Ny4xOC42Mi4xMDkiLCJuYW1lIjoiS2plbGwgRXJpayBSZWVkIEFuZGEiLCJvaWQiOiI0MDNjZGU3Zi1lZjQ3LTQzNDUtYmYwOS00ZjJmZmM4ZmEwZWEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjIwNTIzMzg4LTEwODUwMzEyMTQtNzI1MzQ1NTQzLTE1MzA0MzMiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJwWXVXbWsyYVo3eGxWLXdGRnRSa21lT2t6ZzRxZFEzU2x0OTM3eW1xM0RNIiwidGlkIjoiM2FhNGEyMzUtYjZlMi00OGQ1LTkxOTUtN2ZjZjA1YjQ1OWIwIiwidW5pcXVlX25hbWUiOiJLRUFBQUBlcXVpbm9yLmNvbSIsInVwbiI6IktFQUFBQGVxdWlub3IuY29tIiwidXRpIjoid3pzZzdrUmN3RTJwUWZIbFcxd0xBQSIsInZlciI6IjEuMCJ9.064P0vSwjY3MHdzIciCPKu8oMlkRfckMpS74ymlexI5XUlfuBiSAvVofFckgUAPH5lPc6BVHX1h1_5UVg5HUxX5V3NvMoxYGryaEHf7gAsUOz-fVl-P1qrfWJV3n7g1yVM-R2lcegsDlCLRCVGcnNL-McycRYmmTk664r2Vw0bw75JP7NE9yMX7qK9E-z11W-moCCPRECgzyfZqR-xH964MuTi30VvLqZt74I0x8Jl1mhguIimVC6Y3_ndM1cmZGLj_e9sDja5Cme1EekHebRVLOoN8HnT2KVgdUkD6YBKLDARpdpQxyLv_jqeCdnD3xDDHu9LGxBwz2CaTf_hPZEw',
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(result => {
        this.setState({ current: result })
        this.updateHours(result.ExpectedHoursWorked)
      });
  }

  updateHours = (newValue) => {
    const nrHours = parseFloat(newValue);
    const startTime = 8;
    const min = nrHours * 60 + 30;
    const from = moment(this.state.date).hour(startTime);
    const to = moment(this.state.date).hour(startTime).add(min, 'minutes');
    console.log(min);
    this.setState({ hours: nrHours, from: from, to: to });
  }

  updateHoursHandler = (newValue) => {
    const hours = newValue.target.value;
    this.updateHours(parseInt(hours, 10));
  }

  render() {
    const date = new Date(this.state.date);
    const from = moment(this.state.from);
    const to = moment(this.state.to);

    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h3>{date.toDateString()}</h3>
            <b>From:</b> {from ? from.format('HH:mm') : ''}
            <br />
            <b>To:</b> {to ? to.format('HH:mm'): ''}
            <br />
            <br />
            <Form.Control
              type="number"
              step="0.25"
              min="0"
              max="24"
              placeholder="Enter hours"
              value={this.state.hours}
              onChange={this.updateHours}
            />
            <Form.Text className="text-muted">
              Expected: {this.state.current.ExpectedHoursWorked}hrs    Lunch: 30min
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formActions">
            <Button variant="primary" type="submit">Update</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Day;
