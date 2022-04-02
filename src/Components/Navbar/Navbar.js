import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center shadow-md p-4'>
            <div>
                <img className='w-40 h-10' src="https://s3images.coroflot.com/user_files/individual_files/large_677882_ewz3wdcc9ao7eu5f4dlszexu_.png" alt="" />
            </div>
            <div className='text-lg font-bold'>
                <NavLink to='/' className='mr-3 p-3'>Home</NavLink>
                <NavLink to='/videos' className='mr-3 p-3'>Videos</NavLink>
                <NavLink to='/contact' className='mr-3 p-3'>Contact</NavLink>
                <NavLink to='/about' className='mr-3 p-3'>About US</NavLink>
                <NavLink to='/login' className='mr-3 p-3'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;