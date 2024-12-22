import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const AddTask = () => {
  const { taskTitle, setTaskTitle, handleSubmit } = useContext(DataContext);

  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label htmlFor='addTitle' className='font-bold'>Title:</label>
        <textarea
          id='addTitle'
          className='mt-2 w-96 h-20 p-2 bg-slate-300 rounded-lg'
          type='text-area'
          placeholder='Add Title of your Task'
          required
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button className='mt-10 text-slate-700 font-bold bg-slate-400 w-16 h-16 rounded-lg hover:scale-110' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTask;