import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

const NewTransactionForm = () => {
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
        transactionId: "",
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "",
    })


    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        transaction.amount = Number(transaction.amount)
        console.log(transaction, "transaction in handleSubmit on new form page")

    axios
        .post(`${API}/transactions`, transaction)
        .then(() => navigate('/transactions'))
        .catch(err => console.log(err))
    }


    return (
<>
            <form onSubmit={handleSubmit}>
                <label htmlFor="transactionId">Transaction ID:</label>
                <input
                id="transactionId"
                value={transaction.transactionId}
                type="text"
                onChange={handleTextChange}
                placeholder="Transaction Id (auto-generated)"

                />
                <br/>

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
                value={transaction.date}
                type="date"
                onChange={handleTextChange}
                placeholder="Please select a date"
                required
                />
                <br/><br/>
                <input type="submit" value="  Save"/>
                <br/><br/>

                <label htmlFor="from">From:</label>
                <input
                id='from'
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter the source business or company. (e.g. bank, supermarket"
                required
                />
                <br/>
                <label htmlFor="category">Category:</label>
                <input
                id='category'
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a category"
                required
                />
                <br/>
                
            </form>
        </>
    );
};

export default NewTransactionForm;