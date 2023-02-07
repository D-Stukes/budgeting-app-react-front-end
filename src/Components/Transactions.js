import React from 'react';
import { useState, useEffect} from 'react';
import Transaction from "./Transaction";
import axios from 'axios'
//import { Link } from "react-router-dom";
//import { v4 as uuid } from 'uuid';
const API = process.env.REACT_APP_API_URL


const Transactions = () => {

    const [transactions, setTransactions] = useState([]) 
    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((res) => setTransactions(res.data))
        }, [])
        // let { index } = useParams();
        // let transaction = transactions.index
    return (
      <div className='transactionsComponent'>
         < >
       
        {/* <thead className='tableHdg'> */}
            <th className='th1'>View this transaction</th>
            <th className='th2'>Item Name</th>
            <th className='th3'>Amount</th>
            <th className='th4'>Date</th>
            <th className='th5'>Category</th>
            <th className='th6'>From</th>
            <th className='th7'>Description</th>
        {/* </thead> */}
        
        <table>
             <tr>
             {
                transactions.map((transaction, index ) =>{ 
                     return <Transaction key={index} transaction={transaction} index={index}/>
                })}
             </tr>
              </table>

        </>
        </div>
    );
};

export default Transactions;

////<ShowOneTransaction key={index} transaction={transaction} index={index}/>

// {transactions.map((transaction, transactionId, index) => {
//     return <ShowOneTransaction key={transactionId} transaction={transaction} index={index}
// {console.log(transactions, "transactions after useEffect")}
//           {transactions.map((transaction, index) => {
//             {console.log(transaction, index, "this is transaction and index in the map statement")}
//               return <ShowOneTransaction key={index} transaction={transaction}   />;
//             })} 

{/* <Link to={`/transactions/${index}`}> <td className='item6'>{transaction.description}</td></Link> */}

// <Link to={`/transactions/${index}`}> <td className='item1'>{transaction.item_name}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item2'>{transaction.amount}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item3'>{transaction.date}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item4'>{transaction.category}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item5'>{transaction.from}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item6'>{transaction.description}</td></Link>