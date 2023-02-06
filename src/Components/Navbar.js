import React from 'react';
import { Link } from "react-router-dom"
//import '../navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className ="navbar">
                
                <Link to="/" className="navBarHdg" > 
                    Star Central Budgeting App
                </Link>
            
                <button 
                        className='transactionsListButton'> 
                        <Link className='transactionsLink' to="/transactions">Transactions
                        </Link>
                    </button>
                
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