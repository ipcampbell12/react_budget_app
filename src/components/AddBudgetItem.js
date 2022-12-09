import React, { useState, useEffect } from 'react';
import CategoryModal from './Modals&Alerts/CategoryModal';
import ClearModal from './Modals&Alerts/ClearModal';
import RemoveModal from './Modals&Alerts/RemoveModal';


function AddBudgetItem({ onAdd, setShow, setDanger, clearLists, length }) {

    //CATEGORY STATE
    const [categoriesList, setCategoriesList] = useState([
        { id: 0, category: 'Choose a Category:' },
        { id: 1, category: 'Income' },
        { id: 2, category: 'Housing and Utilities' },
        { id: 3, category: 'Groceries' },
        { id: 4, category: 'Medical Expenses' }
    ])

    useEffect(() => {
        if (categoriesList !== null) window.localStorage.setItem('categoriesList', JSON.stringify(categoriesList))
    }, [categoriesList]
    )

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('categoriesList'))
        if (data !== null) setCategoriesList(data)

    }, []
    )

    const addCategory = (category) => {

        const id = (categoriesList.length + categoriesList.length) + 1

        const newItem = { id, ...category }


        setCategoriesList([...categoriesList, newItem])
        setCategoryDanger(false)
        setAlertShow(true)

    }

    const deleteCategory = (id) => {
        setCategoriesList(categoriesList.filter((category) => category.id !== id))
    }

    //CATEOGORY MODAL
    const [categoryModal, setCategoryModal] = useState(false)
    const handleOpen = () => setCategoryModal(true);
    const handleClose = () => setCategoryModal(false);

    //CLEAR MODAL
    const [clearModal, setClearModal] = useState(false)
    const handleClearClose = () => setClearModal(false)
    const handleClearOpen = () => setClearModal(true)

    //ALERT STATE
    const [alertShow, setAlertShow] = useState(false)
    const [categoryDanger, setCategoryDanger] = useState(false)

    //REMOVE STATE
    const [removeModal, setRemoveModal] = useState(false)
    const hanldeRemoveClose = () => setRemoveModal(false)
    const handleRemoveOpen = () => setRemoveModal(true)


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

                    <input type="text" placeholder='Description' className="form-control" value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>

                <div className="form-field">
                    <input type="number" className="form-control" value={value} placeholder="Value" onChange={(e) => {
                        setValue(parseFloat(e.target.value))
                    }} />
                </div>

                <div className="form-field">
                    <select className="add-category form-control" placeholder='Category' value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        {categoriesList.map(category => (
                            <option> {category.category} </option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <input type="submit" value="Add Budget Item" className="btn btn-primary" />

                </div>




            </form>





            <div className="btn-div">

                <button onClick={event => { handleClearOpen() }} type="button" className="btn btn-warning">Clear Budgets</button>

                <button type="button" className="btn btn-info space" onClick={event => { handleOpen() }}> Add Category </button>

                <button type="button" className="btn btn-info space" onClick={event => { handleRemoveOpen() }}> Remove Category </button>
            </div>

            {clearModal ? <ClearModal
                show={clearModal}
                onClose={handleClearClose}
                clearLists={clearLists}
                length={length} /> : ''}

            {categoryModal && <CategoryModal
                show={categoryModal}
                onClose={handleClose}
                onAdd={addCategory}
                categoryDanger={categoryDanger}
                setCategoryDanger={setCategoryDanger}
                setAlertShow={setAlertShow}
                alertShow={alertShow} />}

            {removeModal && <RemoveModal
                show={removeModal}
                onClose={hanldeRemoveClose}
                categoriesList={categoriesList}
                onDelete={deleteCategory} />}

        </div>
    );
}

export default AddBudgetItem;