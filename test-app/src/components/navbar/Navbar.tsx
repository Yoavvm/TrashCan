
import React from 'react'
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Navbar