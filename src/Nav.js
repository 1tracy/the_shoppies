import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/nominated'>
                    <button className="nominate-btn">Nominated</button>
                </Link>
                <Link to='/'>
                    <button className="home-btn">Home</button>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;