import React from 'react';
import { Form, Col } from 'react-bootstrap';

const timeEntries = (props) => {
    const entries = props.timeEntries.map(entry => (
        <Form.Row>
            <Col>
                <Form.Label>{entry.CostObjectId}</Form.Label>
            </Col>
            <Col>
                <Form.Label>{entry.TimeEntryHours}</Form.Label>
            </Col>
        </Form.Row>
    ));

    return (
        <Form.Group controlId="formTimeEntries">
            <Form.Row>
                <Col>
                    <Form.Label><b>WBS/Network</b></Form.Label>
                </Col>
                <Col>
                    <Form.Label><b>Hours</b></Form.Label>
                </Col>
            </Form.Row>
            {entries}
        </Form.Group>
    )
}

export default timeEntries;