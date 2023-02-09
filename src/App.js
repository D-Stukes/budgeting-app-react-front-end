// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState} from 'react';


// PAGES
import Home from "./Pages/Home";
import TransactionsIndex from "./Pages/TransactionsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

// COMPONENTS
import Navbar from "./Components/Navbar";


function App() {


  const [ total, setTotal] = useState(0)


  return (
    <div className="App">
       <Router>
          <Navbar  total= {total}/>
          <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<TransactionsIndex  total= {total} setTotal={setTotal}/>} />
                <Route path="/transactions/new" element={<New />} />
                <Route path="/transactions/:index" element={<Show />} />
                <Route path="/transactions/:index/edit" element={<Edit />} />
                <Route path="/error" element={<Error />} />
            </Routes>
          </main>
      </Router>

       
    </div>
  );
}

export default App;



