import React from 'react';
import { useState, useEffect} from 'react';
import Transaction from './Transaction';
import axios from 'axios'
import { Link } from "react-router-dom";
//import Navbar from './Navbar';
//import { v4 as uuid } from 'uuid';
const API = process.env.REACT_APP_API_URL


const Transactions = () => {

    const [transactions, setTransactions] = useState([]) 
    const [ total, setTotal] = useState(0)

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((res) => {
            let sum = 0
            res.data.forEach((data) =>{
                if(data.is_expense){
                    sum -= data.amount
                } else {
                    sum += data.amount
                }
            })
            console.log("sum= ", sum)
            setTotal(sum)
            
            setTransactions(res.data)})
        }, [])
        // let { index } = useParams();
        // let transaction = transactions.index

// function CalculateTotal(){
   
// }


    return (
      <div className='transactionsComponent'>
        <h1 className='acctTotal'>Account Total: {total}</h1>
               <div className="tableHdgGrid">
                    {/* <thead className='tableHdg'> */}
                        <span className='th1'>View this transaction</span>
                        <span className='th2'>Item Name</span>
                        <span className='th3'>Amount</span>
                        <span className='th4'>Date</span>
                        <span className='th5'>Category</span>
                        <span className='th6'>From</span>
                        <span className='th7'>Description</span>
                    {/* </thead> */}
                    {
                        transactions.map((transaction, index) => { 
                            return(
                            <>   
                            <Link key={index} className='viewItem' to={`/transactions/${index}`}>View this entry</Link>
                            <span className='items item1'> {transaction.item_name}</span>
                            <span className='items item2'> {transaction.amount}</span>
                            <span className='items item3'> {transaction.date}</span>
                            <span className='items item4'> {transaction.category}</span>
                            <span className='items item5'> {transaction.from}</span>
                            <span className='items item6'> {transaction.description}</span> 
                            </> 
                            )
                        })}
                </div> 
                
                    <div className="tableDataGrid">
                        {/* {
                        transactions.map((transaction, index) => { 
                            return(
                            <>   
                            <Link key={index} className='viewItem' to={`/transactions/${index}`}>View this entry</Link>
                            <span className='items item1'> {transaction.item_name}</span>
                            <span className='items item2'> {transaction.amount}</span>
                            <span className='items item3'> {transaction.date}</span>
                            <span className='items item4'> {transaction.category}</span>
                            <span className='items item5'> {transaction.from}</span>
                            <span className='items item6'> {transaction.description}</span> 
                            </> 
                            )
                        })} */}
                       
                    </div>
                    
                    {/* <Navbar  total={total}/> */}
           
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


// <Link to={`/transactions/${index}`}> <td className='item1'>{transaction.item_name}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item2'>{transaction.amount}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item3'>{transaction.date}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item4'>{transaction.category}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item5'>{transaction.from}</td></Link>
// <Link to={`/transactions/${index}`}>  <td className='item6'>{transaction.description}</td></Link>