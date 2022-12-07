import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryModal({ show, onClose, onAdd }) {

    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!category) {
            return
        }

        onAdd({ category })
    }

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
                <form action="" onSumbit={onSubmit}>
                    <div className="form-field">
                        <label htmlFor="" className="">Category Name</label>
                        <input type="text" placeholder='Category Name' className="form-control" value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} />
                    </div>

                </form>
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