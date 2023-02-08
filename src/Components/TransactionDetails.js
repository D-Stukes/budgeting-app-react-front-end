import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


function TransactionDetails() {

  const [transaction, setTransaction] = useState([]);  //set state to handle changes in transaction entry
  let { index } = useParams();  //utilize useParams to capture id of selected transaction
  let navigate = useNavigate(); // Navigate to enables 

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
        navigate("/transactions")
    })
    .catch(err => navigate('/error'))
  };

  //display this info in the browser
  return (
    // transaction.item_name &&
    <article className='transactionDetails'>  
       <h3>{transaction.item_name}</h3>
       <h3>{transaction.amount}</h3>
       <h3>Category:{transaction.category}</h3>
       <h3>Transaction Source: {transaction.from}</h3>
       <h3>Transaction Date: {transaction.date}</h3>
       <h3>Description:{transaction.description}</h3>
      <div className="transactionButtons">
        <Link to={`/transactions`}> <button className="backButton"> Return to Transactions list</button> </Link>
        <Link to={`/transactions/${index}/edit`}><button className="editButton">Edit</button> </Link>
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      </div>
    </article>
  );
}

export default TransactionDetails;

     