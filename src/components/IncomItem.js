import React from 'react';
import { numberFormatter } from '../App';

function IncomeItem({ item, onDelete }) {
    return (
        <tr className="table-success">
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{numberFormatter.format(item.value)}</td>
            <td><button className='btn btn-danger' onClick={() => onDelete(item.id)}> X </button> </td>
        </tr>
    );
}

export default IncomeItem;