import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>Simple Banking System with Blockchain Technology 🔥🔥🔥</h1>
            <Link className="headerLink" to="/">Home</Link>
            <Link className="headerLink" to="/add-transaction">Add transaction</Link>
        </div>
    )
}

export default Header;
