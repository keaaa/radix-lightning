import React from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

const wbs = (props) => {
    const wbsList = props.wbsList.map((wbs, i) => (
        <ListGroup.Item action active={i===0} >
            {wbs}
        </ListGroup.Item>
    ));
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
            <Modal.Title>Select wbs/network</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <ListGroup defaultActiveKey="#link1" variant="flush">
                {wbsList}
                </ListGroup>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>Close</Button>
            <Button variant="primary" onClick={props.save}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default wbs;