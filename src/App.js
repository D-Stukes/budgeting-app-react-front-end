// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from "axios"


// PAGES
import Home from "./Pages/Home";
import TransactionsIndex from "./Pages/TransactionsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";


// COMPONENTS
import Navbar from "./Components/Navbar";

const API = process.env.REACT_APP_API_URL

function App() {

 const [ total, setTotal] = useState(0)
  const [transaction, setTransaction] = useState([])

  useEffect(() => {
    axios.get(`${API}/transactions`)
    .then((res) => {
        let sum = 0
        let newAmount;
        res.data.forEach((data) =>{
          console.log("initial data.amount =", data.amount)
          console.log("new data.amount =", data.amount)
          if(data.is_expense){
              sum -= data.amount
          } else {
              sum += data.amount
         }

        })
        console.log("sum= ", sum)
       
        setTotal(sum)
       })
    }, [ ])   //if the array is empty, the useEffect will fire after the component is fully mounted, which includes the return being executed.  After the return is executed, then the useEffect will run and re-render the page; if it has a value, it will only fire when that value changes


  return (
    <div className="App">
       <Router>
          <Navbar  total= {total}/>
          <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<TransactionsIndex  total= {total} setTotal={setTotal}/>} />
                <Route path="/transactions/new" element={<New />} />
                <Route path="/transactions/:index" element={<Show transaction={transaction} setTransaction={setTransaction} total= {total} setTotal={setTotal} />} />
                <Route path="/transactions/:index/edit" element={<Edit transaction={transaction} setTransaction={setTransaction}/>} />
                <Route path="/error" element={<Error />} />
            </Routes>
          </main>
      </Router>
    </div>
  );
}

export default App;



