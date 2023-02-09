import React from 'react';
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const API = process.env.REACT_APP_API_URL

const NewTransactionForm = () => {
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "",
        description: "",
        is_expense: "",
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

    const[checked, setChecked] = useState(false)

    const handleCheckBox = ()=>{
        setChecked(!checked)  //updates checkbox state
        transaction.is_expense=!checked 
    }

    return (
<>
            <h1 className="newTransactionFormHdg">Add a New Transaction</h1>
            <form 
               className='newTransactionForm1'
                onSubmit={handleSubmit}>
                <label htmlFor="item_name">Item Name:</label>
                <input
                id='item_name'
                value={transaction.item_name}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter item name"
                required
                />
                <br/><br/>

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

                <label htmlFor="from">From:</label>
                <input
                id='from'
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter the source business or company. (e.g. bank, supermarket"
                required
                />
                <br/><br/>
                <label htmlFor="category">Category:</label>
                <input
                id='category'
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a category"
                required
                />

                <br/><br/>
                <label htmlFor="description">Description:</label>
                <input
                id='description'
                value={transaction.description}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a description"
                required
                />

                <br/><br/>
                <label htmlFor="is_expense">Is This An Expense?</label>
                <input
                id='is_expense'
                type="checkbox"
                onChange={handleCheckBox}
                />

                <br/><br/>
                <input type="submit" value="  Save"/><Link to={`/transactions`} className='cancelLink'><button className='cancelEditButton'>Cancel</button>
                </Link>
                                {/* <label htmlFor="transactionId">Transaction ID:</label>
                <input
                id="transactionId"
                value={transaction.transactionId}
                type="text"
                onChange={handleTextChange}
                placeholder="Transaction Id (auto-generated)"
                (removed because IDs are generated on the back end via UUID)

                /> */}
                
            </form>
        </>
    );
};

export default NewTransactionForm;