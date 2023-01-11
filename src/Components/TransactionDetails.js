import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


function TransactionDetails() {

  const [transaction, setTransaction] = useState([]);  //set state to handle changes in transaction entry
  let { index } = useParams();  //utilize useParams to capture index of selected transaction
  let navigate = useNavigate(); // Navigate to enables switching between views

   //get transactions from Express server(backend) and update state of transaction with that data as a response
//  const transactionId = module.export.transactionId

  useEffect(() => {
    axios 
    .get(`${API}/transactions/${index}`)
    .then(res => setTransaction(res.data))
    .catch(err => navigate('/error'))
  }, [index, navigate]);
//   
  //delete selected transaction in response to delete button being clicked, then return to transaction list
  const handleDelete = () => {
    axios.delete(`${API}/transactions/${index}`)
    .then(() =>{
        // window.alert("transaction has been deleted!") - interfered with function execution on line 25
        navigate("/transactions")
    })
    .catch(err => navigate('/error'))
  };

  //display this info in the browser
  return (
    <article className='transactionDetails'>  
       <h3>Item Name:{transaction.item_name}</h3>
       <h3>Item Name:{transaction.amount}</h3>
       <h3>Category:{transaction.category}</h3>
       <h3>Transaction Source: {transaction.from}</h3>
       <h3>Transaction Date: {transaction.date}</h3>
       <h3 className="transactionDescription">Description:{transaction.description}</h3>
      <div className="transactionButtons">
        <Link to={`/transactions`}> <button className="BackButton"> Return to Transactions list</button> </Link>
        <Link to={`/transactions/${index}/edit`}><button className="editButton">Edit</button> </Link>
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      </div>
    </article>
  );
}

export default TransactionDetails;

     