import React from 'react';
import { Link } from "react-router-dom";
import { useState} from 'react';
import Transactions from './Transactions';

const Navbar = ({total}) => {
 

    return (
        <div>
            <nav className ="navbar">
                
                <Link to="/" className="navBarHdg" > 
                <span className='starIcon' >⭐️</span> Star Central Budgeting App
                </Link>
            
                <button className='transactionsListButton'> 
                        <Link className='transactionsLink' to="/transactions">Transactions
                        </Link>
                    </button>
                
                {/* <button><h1 className='acctTotal'>Total: {accountTotal}</h1></button> */}
                <button className='newTransactionButton' > 
                    <Link 
                        className='newTransactionLink' 
                        to="/transactions/new"> New Transaction
                    </Link>
                    </button> 
            {/* <Transactions total = {total} setTotal={setTotal} /> */}
            <h1 className='acctTotalNav'>Bank Account Total: ${total}</h1>
            </nav> 
            
        </div>
    );
};

export default Navbar;