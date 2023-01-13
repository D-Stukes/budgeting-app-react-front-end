import React from 'react';
import { useState, useEffect  } from 'react'
import {  useParams, Link, useNavigate } from 'react-router-dom'
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
    })


    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }
    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((res) => setTransaction(res.data))
        .catch(err => console(err))
      }, [index]);

      const handleSubmit = (event) => {
        event.preventDefault()     
        axios
        .put(`${API}/transactions/${index}`,transaction)
        .then((res) => {
            setTransaction(res.data)
            navigate(`/transactions/${index}`)
        })
        .catch(err => console(err))
        }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="item_name">Item Name:</label>
                <input
                id='item_name'
                value={transaction.item_name}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter item name"
                required
                />
                <br/>

                <label htmlFor="amount">Amount:</label>
                <input
                id="amount"
                value={transaction.amount}
                type="number"
                onChange={handleTextChange}
                placeholder="Enter amount"
                required
                />
                <br/><br/>

                <label htmlFor="date">Date:</label>
                <input
                id="date"
                name="date"
                value={transaction.date}
                type="date"
                
                placeholder="Please select a date"
                onChange={handleTextChange}
                required
                />
                <br/><br/>

                <label htmlFor="from">From:</label>
                <input
                id='from'
                value={transaction.from}
                name="from"
                type="text"
                onChange={handleTextChange}
                placeholder="Enter the source business or company. (e.g. bank, supermarket"
                required
                />
                <br/><br/>
                <label htmlFor="category">Category:</label>
                <input
                id='category'
                name="category"
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a category"
                required
                />
                <br/> <br/>
                <label htmlFor="description">Description:</label>
                <input
                id='description'
                name="description"
                value={transaction.description}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a description/note"
                />
                <br/> <br/>
                <input type="submit" value="Save"/>
                <Link to={`/transactions`} className='cancelLink'><button className='cancelEditButton'>Cancel</button>
                </Link>
            </form>
        </>
    ); 
}

export default EditTransactionForm;