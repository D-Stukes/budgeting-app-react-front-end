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
        {/* <div className='transactionsBox'> */}
                    {/* <p className='item-list'>Transactions List</p> */}
                    {/* <li className='item-name'>Item Name</li>
                    <li className='amount'>Amount</li>
                    <li className='from'>From</li>
                    <li className='category'>Category</li> 
                    <li className='date'>Date</li> */}
                    {/* <p className='description'>Description</p> */}
      
          {transactions.map((transaction,index) => {
            // {console.log(transaction, index, "this is transaction and index in the map statement")}
              return <ShowOneTransaction key={index} transaction={transaction} index={index} />;

            {/* <ShowOneTransaction key={transaction.transactionId} transaction={transaction}  />; switched back to using index*/}

            })} 
        {/* </div> */}
        </>
    );
};

export default Transactions;

// {transactions.map((transaction, transactionId, index) => {
//     return <ShowOneTransaction key={transactionId} transaction={transaction} index={index}
// {console.log(transactions, "transactions after useEffect")}
//           {transactions.map((transaction, index) => {
//             {console.log(transaction, index, "this is transaction and index in the map statement")}
//               return <ShowOneTransaction key={index} transaction={transaction}   />;
//             })} 