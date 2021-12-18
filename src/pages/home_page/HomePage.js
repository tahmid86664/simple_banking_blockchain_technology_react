import React from 'react';
import './HomePage.scss';

import Branches from '../../components/branches/Branches';

const HomePage = () => {
    return (
        <div className="homePage">
            <Branches />
        </div>
    )
}

export default HomePage;
