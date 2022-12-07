import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryModal({ show, onClose }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Would you like to add more categories?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Add a category below
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={event => { onClose() }}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CategoryModal;