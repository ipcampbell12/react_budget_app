import React, { useState } from 'react';



function AddBudgetItem({ onAdd, setShow, setDanger, clearAll, onOpen }) {

    //CATEGORY STATE
    const [catgoriesList, setCategoriesList] = useState([
        'Income',
        'Sales',
        'Groceries',
        'Shopping',
        'Housing and Utilities',
        'Medical',
        'Gifts and Contributions'
    ])


    //have a separate component level state for each form field
    const [type, setType] = useState('inc')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        if (!description || !value || !category) {
            setDanger(true)
            setShow(true)
            return
        }

        onAdd({ type, description, value, category })

        setType('inc')
        setDescription('')
        setValue(0)
        setCategory('')

    }
    //for each form field in jsx, value will be state, and onChange will be setState

    return (
        <div className='add-budget-item'>
            <form action="" className="budget-item-form" onSubmit={onSubmit}>
                <div className="form-field">
                    <label htmlFor="" className="">Item Type</label>
                    <select className="add-type form-control" value={type} onChange={(e) => {
                        setType(e.target.value)
                    }}>
                        <option value='inc'>+</option>
                        <option value='exp' >-</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="" className="">Description</label>
                    <input type="text" placeholder='Description' className="form-control" value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>

                <div className="form-field">
                    <label htmlFor="" className="">Amount</label>
                    <input type="number" className="form-control" value={value} onChange={(e) => {
                        setValue(parseFloat(e.target.value))
                    }} />
                </div>

                <div className="form-field">
                    <label htmlFor="" className="">Category</label>
                    <select className="add-category form-control" placeholder='Category' value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        {catgoriesList.map(category => (
                            <option> {category} </option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <input type="submit" value="Add Budget Item" className="btn btn-primary" />

                </div>
                <div className="form-field">

                    <button onClick={event => { onOpen(); console.log("I got clicked") }} type="button" className="btn btn-warning">Clear Budgets</button>

                </div>
                <div className="form-field">

                    <input type="submit" value="Add Category" className="btn btn-secondary" />
                </div>



            </form>
        </div>
    );
}

export default AddBudgetItem;