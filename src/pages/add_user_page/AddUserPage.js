import React, { useState } from 'react';
import './AddUserPage.scss';

import db from '../../firebase';
import {ref, set } from 'firebase/database';

const AddUserPage = () => {
    const [name, setName] = useState('');
    const [accNo, setAccNo] = useState('');

    const addUser = (e) => {
        e.preventDefault();

        set(ref(db, `branch1/${accNo}`), {
            name: name,
            accNo: accNo,
            accType: 'savings',
            currentBalance: 0,
            accOpenDate: new Date().toLocaleString(),
            transactions: {}
        });
        set(ref(db, `branch2/${accNo}`), {
            name: name,
            accNo: accNo,
            accType: 'savings',
            currentBalance: 0,
            accOpenDate: new Date().toLocaleString(),
            transactions: {}
        });
        set(ref(db, `branch3/${accNo}`), {
            name: name,
            accNo: accNo,
            accType: 'savings',
            currentBalance: 0,
            accOpenDate: new Date().toLocaleString(),
            transactions: {}
        });
        set(ref(db, `branch4/${accNo}`), {
            name: name,
            accNo: accNo,
            accType: 'savings',
            currentBalance: 0,
            accOpenDate: new Date().toLocaleString(),
            transactions: {}
        });

        console.log('added user');
        console.log(name);
        console.log(accNo);
        setName('');
        setAccNo('');
    }


    return (
        <div className='addUserPage'>
            <div className="userFormContainer">
                <form className="addUserForm">
                    <input type="text" className="formInput" placeholder="Acc holder name" onChange={(e) => setName(e.target.value)} value={name} />
                    <input type="number" className="formInput" placeholder="Acc no." onChange={(e) => setAccNo(e.target.value)} value={accNo} />
                    <div className="buttonContainer">
                        <button type='submit' onClick={addUser}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddUserPage;