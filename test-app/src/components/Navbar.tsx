
import React from 'react'
import { Link } from 'react-router-dom';
import { CgGym } from 'react-icons/cg';
import { MdSwitchAccount } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='' >
            <NavbarIcon icon={<MdSwitchAccount/>} destination="/login" />
            <NavbarIcon icon={<CgGym/>} destination="/exercises" />
        </div>
    )
}

const NavbarIcon = ({icon, destination}:any) => {
    return (
        <div>
            <Link className='relative flex items-center justify-center h-12 w-16 mx-auto' to={`${destination}`}>{icon}</Link>
            
        </div>
    )

}

export default Navbar