import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import DataContext from '../context/DataContext';

const Task = ({task}) => {
  const { handleDelete } = useContext(DataContext);

  return (
    <div className='flex justify-center items-center m-8'>
      <p className='w-[500px] h-16 bg-blue-950 p-2 rounded-lg font-bold text-white hover:scale-110'>{task.title}</p>
      <FaTrash className='ml-8 hover:scale-125' role='button' onClick={()=>handleDelete(task.id)}/>
    </div>
  )
}

export default Task;