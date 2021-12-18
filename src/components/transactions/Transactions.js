import React from 'react';
import Transaction from '../transaction/Transaction';
import './Transactions.scss';

const Transactions = ({ accNo }) => {
    return (
        <div className="transactions">
            <h2>All Transactions of {accNo}</h2>
            <div className="transactions__container">
                <Transaction />
            </div>
        </div>
    )
}

export default Transactions;
