import React from 'react';
import NewTransactionForm from '../Components/NewTransactionForm';

const New = () => {
    return (
        <div className='newPage'>
          <div className='newTransactionFormBox'>
            <NewTransactionForm />  
          </div>
        </div>
    );
};

export default New;