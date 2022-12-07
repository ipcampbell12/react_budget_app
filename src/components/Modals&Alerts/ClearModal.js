import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ClearModal({ show, onClose, clearLists, length }) {



    return (
        <Modal
            show={show}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Clear budget lists?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to remove all budget items? These changes cannot be undone.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={event => {
                    onClose(); clearLists()
                }}>
                    Yes
                </Button>
                <Button variant="primary" onClick={onClose}>No</Button>
            </Modal.Footer>
        </Modal>
    );



}

export default ClearModal;