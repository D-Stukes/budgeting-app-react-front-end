import React from 'react';
import { Link } from "react-router-dom"
import '../navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className ="navbar">
            <span> <Link className='homeLink' to="/">Home</Link></span> 
            <h1> <Link className='transactionsLink' to="/transactions">Budget App Transactions List</Link></h1>   
            <button className='newTransactionButton'> <Link className='newLogLink' to="/transactions/new">New Transaction</Link>
            </button>
           
        </nav> 
            
        </div>
    );
};

export default Navbar;