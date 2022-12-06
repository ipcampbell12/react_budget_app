import React from 'react';

function IncomeItem({ item }) {
    return (
        <tr className="table-success">
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>X</td>
        </tr>
    );
}

export default IncomeItem;