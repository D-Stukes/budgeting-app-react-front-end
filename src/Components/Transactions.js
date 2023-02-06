import React from 'react';
import { useState, useEffect} from 'react';
import ShowOneTransaction from "./ShowOneTransaction";
import axios from 'axios'
import { Link } from "react-router-dom";
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
        <>
        <div className='transactionsBox'>
                    {/* <p className='item-list'>Transactions List</p> */}
                    {/* <th className='item-name'>Item Name</th>
                    <th className='amount'>Amount</th>
                    <th className='from'>From</th>
                    <th className='category'>Category</th> 
                    <th className='date'>Date</th> */}
                    {/* <p className='description'>Description</p> */}

          <table className='transactionsTable'>
            <thead>
                 <tr className='transactionsTableHdg'>
                    <th className='item-name'>Item Name</th>
                    <th className='amount'>Amount</th>
                    <th className='from'>From</th>
                    <th className='category'>Category</th> 
                    <th className='date'>Date</th>
                    <th className='description'>Description</th>
                 </tr>
            </thead>

            <tbody className='transactionsTableBody'>
             {
                transactions.map((transaction, index ) =>{ 
                    return <ShowOneTransaction key={index} transaction={transaction} index={index}/>
            //   <tr className='transactionRowItems'>
            //     {console.log(transaction[index])}
            //     <td className='item1'>{transaction.item_name}</td>
            //     <td className='item2'>{transaction.amount}</td>
            //     <td className='item3'>{transaction.date}</td>
            //     <td className='item4'>{transaction.category}</td>
            //     <td className='item5'>{transaction.from}</td>
            //     <td className='item6'>{transaction.description}</td>
            //   </tr>
              })}
            </tbody>
          </table>

        </div>
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

{/* <Link to={`/transactions/${index}`}> <td className='item6'>{transaction.description}</td></Link> */}

// <Link to={`/transactions/${index}`}> <td className='item1'>{transaction.item_name}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item2'>{transaction.amount}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item3'>{transaction.date}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item4'>{transaction.category}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item5'>{transaction.from}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item6'>{transaction.description}</td></Link>