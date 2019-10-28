import React from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

const wbs = (props) => {
    const wbsList = props.wbsList.map(wbs => (
        <ListGroup.Item action active={props.selectedWbs === wbs} onClick={props.selectWbs} value={wbs} key={wbs} >
            {wbs}
        </ListGroup.Item>
    ));
    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
            <Modal.Title>Select wbs/network</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <ListGroup defaultActiveKey="#link1" variant="flush">
                {wbsList}
                </ListGroup>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="primary" onClick={props.save}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default wbs;