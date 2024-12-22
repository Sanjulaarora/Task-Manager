import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'>
        <p className='font-extrabold text-3xl'>Your Task</p>
        <p className='w-36 text-center font-extrabold'>Manager!</p>
      </NavLink>
    </header>
  )
}

export default Header;