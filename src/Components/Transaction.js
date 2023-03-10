import React from 'react';
import { Link, useParams } from 'react-router-dom'

const Transaction = ({transaction, index}) => {
    console.log("showOneTransaction index = ", index)

    return (
     <div className='tableDataGrid'>
   
            <span className='viewItem'><Link to={`/transactions/${index}`}>View this entry</Link></span>
            <span className='items item1'> {transaction.item_name}</span>
            <span className='items item2'> {transaction.amount}</span>
            <span className='items item3'> {transaction.date}</span>
            <span className='items item4'> {transaction.category}</span>
            <span className='items item5'> {transaction.from}</span>
            <span className='items item6'> {transaction.description}</span>

      
   
    </div>
   
    );
}; 

export default Transaction;

//replaced transactionId with index after excess elements were created in react browser


// transactionId: {itemID},
// item_name: "Con Edison",
// amount: 150,
// date: "01/2/2023",
// from: "Utility Bill",
// category: "Expenses",

            // <tr className='transactionList'>
            //     <td className='transaction_ItemName'><Link to={`/transactions/${index}`}>{transaction.item_name}</Link> </td>

            //     <td className='transactionAmount'><Link to={`/transactions/${index}`}> {transaction.amount} </Link></td>

            //     <td className='transactionFrom'><Link to={`/transactions/${index}`}> {transaction.from} </Link></td>

            //     <td className='transactionCategory'><Link to={`/transactions/${index}`}> {transaction.category} </Link></td>

            //     <td className='transactionDate'><Link to={`/transactions/${index}`}> {transaction.date} </Link></td>

            // </tr> 
            // <td className='item1'>{transaction.item_name}</td>
            // <td className='item2'>{transaction.amount}</td>
            // <td className='item3'>{transaction.date}</td>
            // <td className='item4'>{transaction.category}</td>
            // <td className='item5'>{transaction.from}</td>
            // <td className='item6'>{transaction.description}</td>