import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const hours = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
            <Modal.Title>Add hours</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
            <p>Add hours box</p>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>Close</Button>
            <Button variant="primary" onClick={props.next}>Next</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default hours;