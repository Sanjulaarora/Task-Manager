import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DataContext from '../context/DataContext';

const NavBar = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div>
      <div className='flex justify-center items-center mt-10'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            className='bg-slate-300 p-2 rounded-lg'
            type='text'
            placeholder='Search Your Task'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <NavLink to='/add-task'>
          <span className='ml-10 p-2 bg-slate-300 font-bold text-slate-600 rounded-lg hover:scale-110'>Add Task</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;