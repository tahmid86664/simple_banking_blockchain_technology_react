import React from 'react';
import Transaction from '../transaction/Transaction';
import './Transactions.scss';

const Transactions = () => {
    return (
        <div className="transactions">
            <h2>All Transactions</h2>
            <div className="transactions__container">
                <Transaction />
            </div>
        </div>
    )
}

export default Transactions;
