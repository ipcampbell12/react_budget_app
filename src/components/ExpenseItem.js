import React from 'react';

function ExpenseItem({ item }) {
    return (

        <tr className="table-danger">
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>Percentage</td>
            <td>X</td>
        </tr>

    );
}

export default ExpenseItem;