import React from 'react';
import './HomePage.scss';

import Users from '../../components/users/Users';
import Transactions from '../../components/transactions/Transactions';

const HomePage = () => {
    return (
        <div className="homePage">
            <Users />
            <Transactions />
        </div>
    )
}

export default HomePage;
