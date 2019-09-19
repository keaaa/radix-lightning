import React from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

const hours = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
            <Modal.Title>Add hours</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl 
                        placeholder="Number of hours"  
                        onChange={props.updateAddHours} 
                        value={props.hours == 0 ? '' : props.hours} 
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">hours</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>Close</Button>
            <Button variant="primary" onClick={() => props.next()}>Next</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default hours;