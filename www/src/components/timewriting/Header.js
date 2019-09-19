import React from 'react';
import { Form, Col } from 'react-bootstrap';
import moment from 'moment';

const header = (props) => {
    const date = new Date(props.date);
    const from = moment(props.from);
    const to = moment(props.to);
    
    return <Form.Group controlId="formBasicEmail">
        <h3>{date.toDateString()}</h3>
        <br />
        <Form.Row>
            <Col>
                <Form.Label>From</Form.Label>
            </Col>
            <Col>
                <Form.Label>{from ? from.format('HH:mm') : ''}</Form.Label>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Label>To</Form.Label>
            </Col>
            <Col>
                <Form.Label>{to ? to.format('HH:mm'): ''}</Form.Label>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Text className="text-muted">Expected: {props.expectedHoursWorked}hrs</Form.Text>
            </Col>
            <Col>
                <Form.Text className="text-muted">Lunch: {props.lunch}min</Form.Text>
            </Col>
        </Form.Row>
    </Form.Group>
}

export default header;