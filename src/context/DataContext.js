import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
import api from '../api/tasks';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/tasks');

  useEffect(() => {
    setTasks(data);
  },[data]);

  useEffect(() => {
    const filteredResults = tasks.filter((task) => ((task.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  }, [tasks, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, title: taskTitle };
    try {
      const response = await api.post('/tasks', newTask);
      const allTasks = [...tasks, response.data];
      setTasks(allTasks);
      alert('Task is added');
      setTaskTitle('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async(id) =>{
    try{  
      await api.delete(`/tasks/${id}`)
      const tasksList= tasks.filter(task => task.id !== id)
      setTasks(tasksList)
    } catch(err){
      console.log(`Error : ${err.message}`)
    }
  }
    

  return (
    <DataContext.Provider value={{
      search, setSearch, searchResults, fetchError, isLoading, tasks, setTasks, handleDelete, handleSubmit, taskTitle, setTaskTitle
    }}>
      {children}
    </DataContext.Provider>    
  )
}

export default DataContext;