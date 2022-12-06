import React from 'react';

function TotalBudget({ income, expenses, difference, percentage }) {
    return (
        <div className='budget'>

            <div className='difference bg-info'>
                <span>Total Budget</span>
                <span> {difference} </span>
            </div>

            <div className="income ">
                <span>Income</span>
                <span>+ {income}</span>
            </div>

            <div className="expenses " >
                <span>Expenses</span>
                <span> - {expenses}</span>
                <span>{percentage > 0 ? percentage : 0} %</span>
            </div >
        </div >
    );
}

export default TotalBudget;