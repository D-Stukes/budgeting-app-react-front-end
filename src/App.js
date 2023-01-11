import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Transactions from "./Pages/TransactionsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

// COMPONENTS
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <Routes>
<Route path="/" element={<Home />} />
<Route path="/courses" element={<Courses />}>
  <Route path="search" element={<Search />} />
  <Route path="list" element={<List/>}/>
</Route>
</Routes> */}

{/* <Routes>
<Route path="/" element={<Home />} />
    <Route path="/transactions" element={<Transactions />} >
    <Route path="new" element={<New />} />
    <Route path="index" element={<Show />} />
    <Route path="index/edit" element={<Edit />} />
</Route>
<Route path="/error" element={<Error />} />
</Routes> */}