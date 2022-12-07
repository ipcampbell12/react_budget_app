import React from 'react';
import { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'



function CategoryAlert({ setAlertShow, danger }) {

    useEffect(() => {
        setTimeout(() => setAlertShow(false), 4000)
    });

    return (
        <Alert variant={danger ? 'danger' : 'success'}>
            {danger ?
                <span className='text'> You must enter a category</span> :
                <span className='text'> New category added successfully! </span>
            }
            <span className="close" onClick={() => setAlertShow(false)}> &times;</span>
        </Alert>
    );
}

export default CategoryAlert;