import React, { useState, useEffect } from 'react';
import './BranchPage.scss';

import { useParams } from 'react-router-dom';
import Users from '../../components/users/Users';

import db from '../../firebase';
import { ref, onValue } from 'firebase/database';

const BranchPage = () => {
    let params = useParams();
    let bid = params.bid;

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        const refB = ref(db, `branch${bid}/`);
        onValue(refB, (snapshot) => {
            const uObj = snapshot.toJSON();
            const users = [];
            for (let key in uObj) {
                users.push(uObj[key]);
            }
            setUsers(users);
        })
    }, [bid]);

    console.log(users);

    return (
        <div className='branchPage'>
            <h1>Branch {bid}</h1>
            <Users users={users} />
        </div>
    )
}


export default BranchPage;