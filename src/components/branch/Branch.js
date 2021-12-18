import React from 'react';
import './Branch.scss';

const Branch = ({ branchNo }) => {
    return (
        <div className='branch'>
            <h1>Branch {branchNo}</h1>
            <h3>Notifincations</h3>
        </div>
    )
}


export default Branch;