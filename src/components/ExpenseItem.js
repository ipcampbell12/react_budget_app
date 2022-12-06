import React from 'react';

function ExpenseItem({ item, total }) {
    return (

        <tr className="table-danger">
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>{Math.round((parseFloat(item.value) / total) * 100)}</td>
            <td>X</td>
        </tr>

    );
}

export default ExpenseItem;