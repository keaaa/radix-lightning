/* eslint-disable no-console */
import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

class Day extends Component {
  constructor() {
    super();

    this.state = {
      hours: 8,
      from: '08:00',
      to: '16:00',
      current: {
        ExpectedHoursWorked: '7.5',
      },
    };
  }

  componentDidMount() {
    this.loadWbs();
  }

  loadWbs = () => {
    const url = '/api/v1/hours-for-day/2019/09/06';
    fetch(url, {
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiI2ZTg4YTU5MS0xNmZhLTRiZWQtOTY5Yi0xMzY0YjU1MzA0NDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNTY4ODE3NTgxLCJuYmYiOjE1Njg4MTc1ODEsImV4cCI6MTU2ODgyMTQ4MSwiYWNyIjoiMSIsImFpbyI6IjQyRmdZS2orcU5Td0tuWjN6czh3a3hzbkdCb1AxbGtwNjRyc3VYVjV5K09pQ2FaaU94SUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNzU0ZjQwYmMtZWRkOC00NWI1LTg3Y2EtOTAyMjQyNzEwOTc3IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJBbmRhIiwiZ2l2ZW5fbmFtZSI6IktqZWxsIEVyaWsgUmVlZCIsImlwYWRkciI6Ijc3LjE4LjYyLjEwOSIsIm5hbWUiOiJLamVsbCBFcmlrIFJlZWQgQW5kYSIsIm9pZCI6IjQwM2NkZTdmLWVmNDctNDM0NS1iZjA5LTRmMmZmYzhmYTBlYSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMTUzMDQzMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InBZdVdtazJhWjd4bFYtd0ZGdFJrbWVPa3pnNHFkUTNTbHQ5Mzd5bXEzRE0iLCJ0aWQiOiIzYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAiLCJ1bmlxdWVfbmFtZSI6IktFQUFBQGVxdWlub3IuY29tIiwidXBuIjoiS0VBQUFAZXF1aW5vci5jb20iLCJ1dGkiOiJWdnlQSHBLMlZrLTFPZ1lvQ00wa0FBIiwidmVyIjoiMS4wIn0.c5Mi1wwy29zaGbcFNrjglSqA7uxpqJvKCviGSzoy9CtjT_zjXwaR9e3vBW82XGX5kOkBPbM6MQf8ZC_LOBeGAg7y2-SQkIch0_ANCYhD2NeV9L7f8b2LNUasxz_0t4swzNBTHf_Vy6W4yIxn-OnbZ-EfHmqqhdsh7cXrSSE6cvDqw4hpsOtWnsIvlK5ouss_M0hcJXgx_JBLM5W0jIcZVXfSPn8Lk3sODrCL9N10hkPAOJhf2cNZb9zElkRyq48GUO612BjoGr9eX_kPGoqOG6wDCU-JgqRJxvukk5sH_jYowViH4tusMAqitNrnAr1cSb953lWnRc3eh_lpzT5lRw',
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(result => this.setState({ current: result }));
  }

  updateHours = (newValue) => {
    const hours = newValue.target.value;
    const to = 8 + parseInt(hours, 10);

    this.setState({ hours, to: `${to}:00` });
  }

  render() {
    const dateStr = '2019-01-30';
    const date = new Date(dateStr);

    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h3>{date.toDateString()}</h3>
            <b>From:</b> {this.state.from}
            <br />
            <b>To:</b> {this.state.to}
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
              Expected: {this.state.current.ExpectedHoursWorked}
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
