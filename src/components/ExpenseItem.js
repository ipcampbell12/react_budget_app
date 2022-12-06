import React from 'react';

function ExpenseItem({ item, total, onDelete }) {
    return (

        <tr className="table-danger">
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>{total === 0 ? 0 : Math.round((parseFloat(item.value) / total) * 100) + '%'}</td>
            <td><button className='btn btn-danger' onClick={() => onDelete(item.id)}> X </button> </td>
        </tr>

    );
}

export default ExpenseItem;