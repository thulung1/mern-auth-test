import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/userContext'
import axios from "axios";
import { BASE_URL } from './url'

function App() {
  const {username, setUsername} = useContext(UserContext)
  const profile = async () => {
    if(!username){
      const res = await axios.get(`${BASE_URL}/api/v1/user/profile`, {
        withCredentials: true,
      });
      setUsername(res.data);
    }
    
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
