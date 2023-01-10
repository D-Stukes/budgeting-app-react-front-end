import React from 'react';
import { useState, useEffect } from 'react';
import ShowOneTransaction from "./ShowOneTransaction";
import axios from 'axios'
//import { v4 as uuid } from 'uuid';
const API = process.env.REACT_APP_API_URL


const Transactions = () => {

    const [transactions, setTransactions] = useState([]) 
    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((res) => setTransactions(res.data))
        console.log(transactions, "transactions after useEffect")
        }, [])

    return (
             <>
                <tr className='transactionListHdg'>
                    <td>Item Name</td>
                    <td>Amount</td>
                    <td>From</td>
                    <td>Category</td> 
                    <td>Date</td>
                </tr> 
          {transactions.map((transaction, index) => {
              return <ShowOneTransaction key={index} transaction={transaction}  />;
            })}
            </>       
    );
};

export default Transactions;

// {transactions.map((transaction, transactionId, index) => {
//     return <ShowOneTransaction key={transactionId} transaction={transaction} index={index}