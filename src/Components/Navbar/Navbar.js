import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const {pathname} = useLocation();
    return (
        <nav style={pathname.includes("blog") ? {display: 'none'} : {display: 'flex'}} className='flex justify-between items-center shadow-md p-4'>
            <div>
                <img className='w-40 h-10' src="https://s3images.coroflot.com/user_files/individual_files/large_677882_ewz3wdcc9ao7eu5f4dlszexu_.png" alt="" />
            </div>
            <div className='text-lg font-bold text-sky-400'>
                <NavLink to='/' className={({isActive}) => (isActive ? 'text-sky-700 mr-3 p-3' : 'mr-3 p-3')}>Home</NavLink>
                <NavLink to='/videos' className={({isActive}) => (isActive ? 'text-sky-700 mr-3 p-3' : 'mr-3 p-3')}>Videos</NavLink>
                <NavLink to='/contact' className={({isActive}) => (isActive ? 'text-sky-700 mr-3 p-3' : 'mr-3 p-3')}>Contact</NavLink>
                <NavLink to='/about' className={({isActive}) => (isActive ? 'text-sky-700 mr-3 p-3' : 'mr-3 p-3')}>About US</NavLink>
                <NavLink to='/login' className={({isActive}) => (isActive ? 'text-sky-700 mr-3 p-3' : 'mr-3 p-3')}>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;