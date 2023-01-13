import React from 'react';
import { Link } from 'react-router-dom'

const ShowOneTransaction = ({transaction, index}) => {
// console.log(index, "index on ShowOneTransaction page")
    return (
     <>
       <Link to={`/transactions/${index}`}> <p>{transaction.item_name}</p></Link>
        <p>{transaction.amount}</p>
        {/* <p>{oneTransaction.category}</p> */}
        <p>{transaction.date}</p>
        {/* <p>{oneTransaction.from}</p> */}
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