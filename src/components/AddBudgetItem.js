import React, { useState } from 'react';



function AddBudgetItem({ onAdd }) {

    //have a separate component level state for each form field
    const [type, setType] = useState('inc')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        if (!description || !value || !category) {
            alert('All fields must be filled out')
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
            <form action="" className="form-control budget-item-form" onSubmit={onSubmit}>
                <div className="form-control e">
                    <label htmlFor="">Item Type</label>
                    <select className="add-type" value={type} onChange={(e) => {
                        setType(e.target.value)
                    }}>
                        <option value='inc'>+</option>
                        <option value='exp' >-</option>
                    </select>
                </div>

                <div className="form-control ">
                    <label htmlFor="">Description</label>
                    <input type="text" value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>

                <div className="form-control ">
                    <label htmlFor="">Value</label>
                    <input type="number" value={value} onChange={(e) => {
                        setValue(parseFloat(e.target.value))
                    }} />
                </div>

                <div className="form-control">
                    <label htmlFor="">Category</label>
                    <select className="add-category" value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        <option value="" selected></option>
                        <option value="Housing and utilties" selected>Housing and Utilties</option>
                        <option value="Income">Income</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Charitable Contributions">Charitable Contributions</option>
                        <option value="Work Expenses">Work Expenses</option>
                        <option value="Restaurants and Coffee">Restaurants and Coffee</option>
                    </select>
                </div>

                <input type="submit" value="Add Budget Item" className="btn btn-primary" />


            </form>
        </div>
    );
}

export default AddBudgetItem;