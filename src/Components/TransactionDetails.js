import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


function TransactionDetails({transaction, setTransaction}) {

  // const [transaction, setTransaction] = useState([]);  //moved up to App so I can pass it down; this statement sets state to handle changes in transaction entry
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
       <br/><br/>
       <h1 className="transactionDetailsHdg">Transaction Details</h1>
       <span className="itemDetailHdg">{transaction.item_name}:</span>
       <span className="itemDetail">${transaction.amount}</span>
       <br/><br/>
       <span className="itemDetailHdg">Category:</span> 
       <span className="itemDetail">{transaction.category}</span>
       <br/><br/>
       <span className="itemDetailHdg">Transaction Source: </span>
       <span className="itemDetail">{transaction.from}</span>
       <br/><br/>
       <span className="itemDetailHdg">Transaction Date: </span>
       <span className="itemDetail">{transaction.date}</span>
       <br/><br/>
       <span className="itemDetailHdg">Description:</span>
       <span className="itemDetail"> {transaction.description}</span>
       <br/><br/>
      <div className="transactionButtons">
        <Link to={`/transactions`}> <button className="backButton"> Return to Transactions list</button> </Link>
        <Link to={`/transactions/${index}/edit`}><button className="editButton">Edit</button> </Link>
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      </div>
    </article>
  );
}

export default TransactionDetails;

     