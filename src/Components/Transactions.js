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
        }, [])

    return (
             <>
             {console.log(transactions, "transactions after useEffect")}
                <tr className='transactionListHdg'>
                    <th className='item-name'>Item Name</th>
                    <th className='amount'>Amount</th>
                    <th className='from'>From</th>
                    <th className='category'>Category</th> 
                    <th className='date'>Date</th>
                </tr> 
          {transactions.map((transaction, index) => {
            {console.log(transaction, index, "this is transaction and index in the map statement")}
              return <ShowOneTransaction key={index} transaction={transaction}   />;
            })}
            </>       
    );
};

export default Transactions;

// {transactions.map((transaction, transactionId, index) => {
//     return <ShowOneTransaction key={transactionId} transaction={transaction} index={index}