import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CategoryAlert from './CategoryAlert';

function CategoryModal({ show, onClose, onAdd }) {

    const [category, setCategory] = useState('')

    //ALERT STATE
    const [alertShow, setAlertShow] = useState(false)

    const [danger, setDanger] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()
        if (!category) {
            return
        }

        onAdd(category)

        setCategory('')
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
                <form action="" onSubmit={onSubmit}>
                    <div className="form-field">
                        <label htmlFor="" className="">Category Name</label>
                        <input type="text" placeholder='Category Name' className="form-control" value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} />
                    </div>
                    <br />
                    <div className="form-field">
                        <input type="submit" value="Add Category" className="btn btn-primary" />

                    </div>

                </form>
                {alertShow ? <CategoryAlert /> : ''}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={event => { onClose() }}>
                    Done
                </Button>

            </Modal.Footer>
        </Modal>
    );
}

export default CategoryModal;