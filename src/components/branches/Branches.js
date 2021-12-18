import React from 'react';
import './Branches.scss';
import { Link } from 'react-router-dom';

import Branch from '../branch/Branch';

const Branches = () => {
    return (
        <div className='branches'>
            <div className="upper">
                <Link to='/branches/1' style={{textDecoration: "none"}}>
                    <Branch branchNo={1} />
                </Link>
                <Link to='/branches/2' style={{textDecoration: "none"}}>
                    <Branch branchNo={2} />
                </Link>
            </div>
            <div className="lower">
                <Link to='/branches/3' style={{textDecoration: "none"}}>
                    <Branch branchNo={3} />
                </Link>
                <Link to='/branches/4' style={{textDecoration: "none"}}>
                    <Branch branchNo={4} />
                </Link>
            </div>            
        </div>
    )
}



export default Branches;