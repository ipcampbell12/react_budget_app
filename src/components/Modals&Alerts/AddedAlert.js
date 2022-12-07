import { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'


function AddedAlert({ setShow, danger }) {

    useEffect(() => {
        setTimeout(() => setShow(false), 4000)
    });

    return (
        <Alert variant={danger ? 'danger' : 'success'}>
            {danger ?
                <span className='text'> All fields must be filled out</span> :
                <span className='text'> Item added successfully! </span>
            }
            <span className="close" onClick={() => setShow(false)}> &times;</span>
        </Alert>
    );
}

export default AddedAlert;