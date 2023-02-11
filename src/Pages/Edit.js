import React from 'react';
import EditTransactionForm from '../Components/EditTransactionForm';

const Edit = ({transaction, setTransaction}) => {
    return (
        <div className='editPage'>
           <EditTransactionForm transaction={transaction} setTransaction={setTransaction} /> 
        </div>
    );
};

export default Edit;