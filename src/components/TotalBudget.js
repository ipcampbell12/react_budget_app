import React from 'react';

function TotalBudget({ income, expenses, difference, percentage }) {
    return (
        <div className='budget'>

            <div className='difference bg-info'>
                <span>Total Budget</span>
                <span className="values"> {difference} </span>
            </div>

            <div className="income ">
                <span>Income</span>
                <span className="values">+ {income}</span>
            </div>

            <div className="expenses " >
                <span>Expenses</span>
                <span className="values"> - {expenses}</span>
                <span className="values">{percentage > 0 ? percentage : 0} %</span>
            </div >
        </div >
    );
}

export default TotalBudget;