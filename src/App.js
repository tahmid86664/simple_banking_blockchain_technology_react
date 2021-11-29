import './App.css';
import { Routes, Route } from 'react-router-dom'; // Switch replaced by Routes

import Header from './components/header/Header';
import HomePage from './pages/home_page/HomePage';
import AddTransactionPage from './pages/add_transaction_page/AddTransactionPage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } /> {/* exact now not needed in react-router-dom. And component replaced by element*/}
        <Route path="/add-transaction" element={ <AddTransactionPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;
