import React from 'react';
import './User.scss';

const User = ({username, accNo, accType, balance, lastTransaction, parentCallback}) => {
    const handleSubmit = () => {
        parentCallback(accNo)
    }

    return (
        <div className="user">
            <div className="user__header">
                <p className="userAcc">{accNo}</p>
            </div>
            <div className="user__body">
                <span className="userInfo"><span className="infoHead">Name:</span>{username}</span>
                <span className="userInfo"><span className="infoHead">Account No:</span>{accNo}</span>
                <span className="userInfo"><span className="infoHead">Account Type:</span>{accType}</span>
                <span className="userInfo"><span className="infoHead">Current Balance (BDT):</span>{balance}</span>
                <span className="userInfo"><span className="infoHead">Last Transaction Date</span>{lastTransaction}</span>
            </div>
            <div className="user__footer">
                <button className="showTransactionBut" onClick={handleSubmit}>
                    Show all transaction
                </button>
            </div>
        </div>
    )
}

export default User;
