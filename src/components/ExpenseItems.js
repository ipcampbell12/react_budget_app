import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseItems({ items, total, onDelete }) {
    return (
        <div className="expense-table-container">
            <h3 className="expense-title"> Expense Items</h3>
            <table className="expense-table table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Value</th>
                        <th>Percentage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <ExpenseItem item={item} total={total} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ExpenseItems;