import React from 'react';
import Transactions from '../Components/Transactions';

const TransactionsIndex = ({total, setTotal}) => {
    return (
        <div className="transactionsIndexPage">
            <Transactions total={total} setTotal={setTotal} />
        </div>
    );
};

export default TransactionsIndex;