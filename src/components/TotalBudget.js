import React from 'react';

function TotalBudget({ income, expenses, difference, percentage }) {
    return (
        <div className='budget'>

            <div class='difference bg-info'>Total Budget <span id="total-budget"> </span> {difference} </div>

            <div class="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value"> + <span className="inc-val">
                        {income}</span></div>
                    <div id="inc-percent"> &nbsp;</div>
                </div>
            </div>


            <div class="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value"> - <span className="exp-val"> {expenses}</span></div>
                    <div><span id="exp-percent">{percentage} </span> %</div>
                </div>
            </div>

        </div>
    );
}

export default TotalBudget;