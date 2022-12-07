import './App.scss';
import React, { useState } from 'react'
import IncomeItems from './components/IncomeItems';
import ExpenseItems from './components/ExpenseItems'
import TotalBudget from './components/TotalBudget';
import AddBudgetItem from './components/AddBudgetItem';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddedAlert from './components/AddedAlert';


export const numberFormatter =
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function App() {

  //BUDGET STATE
  const [incomeState, setIncomeState] = useState([])
  const [expenseState, setExpenseState] = useState([])

  //ALERT STATE
  const [show, setShow] = useState(false)

  const [danger, setDanger] = useState(false)

  const budgetLength = [...incomeState, ...expenseState].length




  const addBudgetItem = (item) => {

    const id = (incomeState.length + expenseState.length) + 1

    const newItem = { id, ...item }

    if (newItem.type === 'inc') {
      setIncomeState([...incomeState, newItem])
      setDanger(false)
      setShow(true)
    }

    if (newItem.type === 'exp') {
      setExpenseState([...expenseState, newItem])
      setDanger(false)
      setShow(true)
    }

  }

  const deleteIncomeItem = (id) => {
    setIncomeState(incomeState.filter((item) => item.id !== id))
  }


  const deleteExpenseItem = (id) => {
    setExpenseState(expenseState.filter((item) => item.id !== id))
  }




  const incomeTotal = incomeState.reduce((accumulator, value) => {
    return accumulator + value.value
  }, 0)

  const expenseTotal = expenseState.reduce((accumulator, value) => {
    return accumulator + value.value
  }, 0)

  const difference = Math.round(incomeTotal - expenseTotal)

  const overalPercentage = Math.round((expenseTotal / incomeTotal) * 100)

  const clearLists = () => {

    setIncomeState(incomeState.filter((item) => item.id < 0))
    setExpenseState(expenseState.filter((item) => item.id < 0))

  }

  return (
    <div className="app">


      <div className="top">
        <div className="title">
          <h1> Budget App</h1>
        </div>
        <div className="upper">
          <BarChart />
          <TotalBudget income={numberFormatter.format(incomeTotal)} expenses={numberFormatter.format(expenseTotal)} difference={numberFormatter.format(difference)} percentage={overalPercentage} />
          <PieChart />
        </div>

        <AddBudgetItem onAdd={addBudgetItem} setShow={setShow} setDanger={setDanger} clearLists={clearLists} length={budgetLength} />

      </div>


      <div className="bottom">
        <div className="lower">
          <IncomeItems items={incomeState} onDelete={deleteIncomeItem} />
          <div className='alert-spot'>
            {show && <AddedAlert show={show} setShow={setShow} danger={danger} />}
          </div>
          <ExpenseItems items={expenseState} total={incomeTotal} onDelete={deleteExpenseItem} />
        </div>
      </div>





    </div>
  );
}

export default App;
