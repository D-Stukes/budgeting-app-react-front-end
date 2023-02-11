import React from 'react';
import { useState, useEffect  } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

const EditTransactionForm = ({transaction, setTransaction}) => {
    let { index } = useParams();
    const navigate = useNavigate()
    const [editTransaction, setEditTransaction] = useState({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "",
        description:"",
        is_expense: ""
    })

    const handleTextChange = (event) => {
        setEditTransaction({...editTransaction, [event.target.id]: event.target.value})
    }

    const[checked, setChecked] = useState(false)

    const handleCheckBox = ()=>{
        setChecked(!checked)  //updates checkbox state
        // editTransaction.is_expense=!checked 
        setEditTransaction({ ...editTransaction, is_expense: !editTransaction.is_expense });
    }

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((res) => setEditTransaction(res.data))
        .catch(err => console.log(err))
      }, [index]);

      const handleSubmit = (event) => {
        event.preventDefault() 
        editTransaction.amount = Number(editTransaction.amount)   
        axios
        .put(`${API}/transactions/${index}`,editTransaction)
        .then((res) => {
            // setEditTransaction(res.data)  No need to display this data on this page since it is immediately navigating to the index page
            setTransaction(res.data)
            navigate(`/transactions/${index}`)
            
        })
        .catch(err => console.log(err))
      }

        // axios
        // .put(`${API}/transactions/${id}`,transaction)
        // .then(() => console.log(".then"))
        // .catch(err => console.log(err))
        // }
        // navigate(`/transactions/${id}`)

    return (
        <>
            <form onSubmit={handleSubmit} className = "editTransactionForm">
            <div className="editTransactionFormBkgrd">
            <h1 className="editTransactionFormHdg">Edit This Transaction</h1>
                <label className='editLabel' htmlFor="item_name">Item Name:</label>
                <input
                className='editInput'
                id='item_name'
                value={editTransaction.item_name}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter item name"
                required
                />
                <br/><br/> 

                <label className='editLabel' htmlFor="amount">Amount:</label>
                <input
                className='editInput'
                id="amount"
                value={editTransaction.amount}
                type="number"
                onChange={handleTextChange}
                placeholder="Enter amount"
                required
                />
                <br/><br/>

                <label className='editLabel'  htmlFor="date">Date:</label>
                <input
                className='editInput'
                id="date"
                name="date"
                value={editTransaction.date}
                type="date"
                placeholder="Please select a date"
                onChange={handleTextChange}
                required
                />
                <br/><br/>

                <label className='editLabel' htmlFor="from">From:</label>
                
                <input
                className='editInput'
                id='from'
                value={editTransaction.from}
                name="from"
                type="text"
                onChange={handleTextChange}
                placeholder="Enter the source business or company. (e.g. bank, supermarket"
                required
                />
                <br/><br/>
                <label className='editLabel' htmlFor="category">Category:</label>
                <input
                className='editInput'
                id='category'
                name="category"
                value={editTransaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a category"
                required
                />

                <br/> <br/>
                <label className='editLabel' htmlFor="description">Description:</label>
                <input
                className='editInput'
                id='description'
                name="description"
                value={editTransaction.description}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a description/note"
                />
                <br/> <br/> <br/>
                <label className='editLabel'  htmlFor="is_expense">Is This An Expense?</label>
                <input
                className='editInput'
                id='is_expense'
                type="checkbox"
                onChange={handleCheckBox}
                checked={editTransaction.is_expense}
                />
                <br/> <br/> <br/>

                <input type="submit" value=" Save"/>

            
            <Link to={`/transactions`} className='cancelLink'><button className='cancelSaveButton'>Cancel</button>
                </Link>
            </div>
        </form>
        </>
    ); 
}

export default EditTransactionForm;