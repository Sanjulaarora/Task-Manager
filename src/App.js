import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gradient-to-b from-slate-700 to-slate-500'>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/add-task' element={ <AddTask /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
