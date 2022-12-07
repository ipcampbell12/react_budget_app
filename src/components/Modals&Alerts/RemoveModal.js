import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CategoryItem from './CategoryItem';

function RemoveModal({ show, onClose, categoriesList, onDelete }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Remove Budget Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Select a category from below to remove from the categories list.</h5>
                <div>
                    <table className="income-table table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoriesList.map((category) => {
                                return category.id >= 1 && <CategoryItem category={category} onDelete={onDelete} />
                            })}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemoveModal;