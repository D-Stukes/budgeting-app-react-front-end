import React from 'react';
import TransactionDetails from '../Components/TransactionDetails';

const Show = ({transaction, setTransaction, total, setTotal}) => {
    return (
        <div className='showPage'>
           <TransactionDetails transaction={transaction} setTransaction={setTransaction} total={total} setTotal={setTotal} /> 
        </div>
    );
};

export default Show;