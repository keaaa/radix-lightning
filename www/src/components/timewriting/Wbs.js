import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const wbs = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
            <Modal.Title>Select wbs/network</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
            <p>select wbs/network</p>
            <p>maybe a comment?</p>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>Close</Button>
            <Button variant="primary" onClick={props.save}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default wbs;