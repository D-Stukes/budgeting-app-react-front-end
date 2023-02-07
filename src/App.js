// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <div className="App">
       <Router>
          <Navbar/>
          <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<TransactionsIndex />} />
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



