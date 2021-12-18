import React, {useState} from 'react';
import './Users.scss';

import User from '../user/User';
import Transactions from '../transactions/Transactions';

const Users = ({ users }) => {
    const [accNo, setAccNo] = useState('');

    const handleCallback = (childData) => {
        setAccNo (childData);
    }

    return (
        <div className="users">
            <div className="usersPanel">
                {
                    users && users.map((user) => 
                    <User
                        key={user.accNo} 
                        username={user.name} 
                        accNo={user.accNo} 
                        accType={user.accType} 
                        balance={user.currentBalance} 
                        lastTransaction={"dd/mm/yyyy"}
                        parentCallback={handleCallback}
                    />)
                }
            </div>
            <Transactions accNo={accNo}/>
        </div>
    )
}

export default Users;
