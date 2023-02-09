import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {

// let accountTotal = {total}

    return (
        <div>
            <nav className ="navbar">
                
                <Link to="/" className="navBarHdg" > 
                <span className='starIcon' >⭐️</span> Star Central Budgeting App
                </Link>
            
                <button 
                        className='transactionsListButton'> 
                        <Link className='transactionsLink' to="/transactions">Transactions
                        </Link>
                    </button>
                
                {/* <button><h1 className='acctTotal'>Total: {accountTotal}</h1></button> */}
                <button 
                    className='newTransactionButton'> 
                    <Link 
                        className='newTransactionButtonLink' 
                        to="/transactions/new"> New Transaction
                    </Link>
                    </button> 
            
            </nav> 
            
        </div>
    );
};

export default Navbar;