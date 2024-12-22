import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from '../context/DataContext';

const Home = () => {
  const { tasks, isLoading, fetchError } = useContext(DataContext);

  return (
    <div className='min-h-screen text-center mt-20'>
      {isLoading && <p>Loading tasks...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (tasks.length ? <Feed tasks={tasks} /> : <p className='mt-40'>No tasks to manage. Add Tasks.</p>)}
    </div>
  )
}

export default Home;