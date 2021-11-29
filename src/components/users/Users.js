import React from 'react';
import './Users.scss';

import User from '../user/User';

const Users = () => {
    return (
        <div className="users">
            <User 
                key={1} 
                username={"Prantick"} 
                accNo={"7281739502"} 
                accType={"Savings"} 
                balance={290000} 
                lastTransaction={"21/11/2021"}
            />
            <User 
                key={2} 
                username={"Mehedi"} 
                accNo={"4567893210"} 
                accType={"Savings"} 
                balance={300000} 
                lastTransaction={"23/11/2021"}
            />
            <User 
                key={3} 
                username={"Sunny"} 
                accNo={"3456271891"} 
                accType={"Savings"} 
                balance={450000} 
                lastTransaction={"26/11/2021"}
            />
            <User 
                key={4} 
                username={"Tahmid"} 
                accNo={"1234567890"} 
                accType={"Savings"} 
                balance={200000} 
                lastTransaction={"29/11/2021"}
            />
        </div>
    )
}

export default Users;
