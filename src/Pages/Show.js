import React from 'react';
import TransactionDetails from '../Components/TransactionDetails';

const Show = ({transaction, setTransaction}) => {
    return (
        <div className='showPage'>
           <TransactionDetails transaction={transaction} setTransaction={setTransaction} /> 
        </div>
    );
};

export default Show;