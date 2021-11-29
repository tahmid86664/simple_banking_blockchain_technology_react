import React from 'react';
import './Transaction.scss';

const Transaction = () => {
    return (
        <div className="transaction">
            <div className="transaction__header">1</div>
            <div className="transaction__body">
                <div className="blockHeader">
                    <span className="blockInfo"><span className="infoHead">Id:</span>1</span>
                    <span className="blockInfo"><span className="infoHead">Time of transaction:</span>29/11/2021</span>
                    <span className="blockInfo"><span className="infoHead">Previous hash:</span>dasadasd2323....</span>
                    <span className="blockInfo"><span className="infoHead">Hash:</span>asdasgfg3123123....</span>
                </div>
                <div className="blockBody">
                    <h3>Data</h3>
                    <span className="blockInfo"><span className="infoHead">Transaction type:</span>Deposite</span>
                    <span className="blockInfo"><span className="infoHead">Acc no:</span>1234567890</span>
                    <span className="blockInfo"><span className="infoHead">Acc holder name:</span>Tahmid</span>
                    <span className="blockInfo"><span className="infoHead">Ammount:</span>5000</span>
                </div>
                
            </div>
        </div>
    )
}

export default Transaction;
