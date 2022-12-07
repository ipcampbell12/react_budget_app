import React from 'react';

function CategoryItem({ category, onDelete }) {
    return (
        <tr className="table-info">
            <td>{category.category}</td>
            <td><button className='btn btn-danger' onClick={() => onDelete(category.id)}> X </button> </td>
        </tr>
    );
}

export default CategoryItem;