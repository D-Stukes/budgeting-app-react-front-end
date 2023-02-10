import React from 'react';
import { useState, useEffect  } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

const EditTransactionForm = () => {
    let { index } = useParams();
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "",
        description:"",
    })

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    const[checked, setChecked] = useState(false)

    const handleCheckBox = ()=>{
        setChecked(!checked)  //updates checkbox state
        transaction.is_expense=!checked 
    }


    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((res) => setTransaction(res.data))
        .catch(err => console.log(err))
      }, [index]);

      const handleSubmit = (event) => {
        event.preventDefault() 
        transaction.amount = Number(transaction.amount)   
        axios
        .put(`${API}/transactions/${index}`,transaction)
        .then((res) => {
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
                value={transaction.item_name}
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
                value={transaction.amount}
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
                value={transaction.date}
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
                value={transaction.from}
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
                value={transaction.category}
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
                value={transaction.description}
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