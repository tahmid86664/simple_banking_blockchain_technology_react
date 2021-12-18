import './App.css';
import { Routes, Route } from 'react-router-dom'; // Switch replaced by Routes

import Header from './components/header/Header';
import HomePage from './pages/home_page/HomePage';
import AddTransactionPage from './pages/add_transaction_page/AddTransactionPage';
import BranchPage from './pages/branch_page/BranchPage';
import AddUserPage from './pages/add_user_page/AddUserPage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } /> {/* exact now not needed in react-router-dom. And component replaced by element*/}
        <Route path="/add-transaction" element={ <AddTransactionPage /> } /> 
        <Route path="/add-user" element={ <AddUserPage /> } />
        <Route path="/branches/:bid" element={ <BranchPage /> } />
      </Routes>
    </div>
  );
}

export default App;
