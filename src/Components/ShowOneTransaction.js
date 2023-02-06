import React from 'react';
import { Link, useParams } from 'react-router-dom'

const ShowOneTransaction = ({transaction, index}) => {
    console.log("showOneTransaction index = ", index)
    //removed index from props on line 4 after switching to using transactionId
// console.log(index, "index on ShowOneTransaction page")
    return (
     <>
     <tr className='transactionRowItems'>
       <td className='item1'><Link to={`/transactions/${index}`}> {transaction.item_name}</Link></td>
       <td className='item2'><Link to={`/transactions/${index}`}> {transaction.amount}</Link></td>
       <td className='item3'><Link to={`/transactions/${index}`}> {transaction.date}</Link></td>
       <td className='item4'><Link to={`/transactions/${index}`}> {transaction.category}</Link></td>
       <td className='item5'><Link to={`/transactions/${index}`}> {transaction.from}</Link></td>
       <td className='item6'><Link to={`/transactions/${index}`}> {transaction.description}</Link></td>
    </tr>
    </>
   
    );
}; 

export default ShowOneTransaction;

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