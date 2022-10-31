
import React from 'react'
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white' >
            <div>
                <Link to="/">Login</Link>
            </div>
            <div>
                <Link to="/register"><FaBeer/></Link>

            </div>
            <div>
                <Link to="/exercises">Exercises</Link>

            </div>
        </div>
    )
}

export default Navbar