import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Home from './Pages/Home';
import { AuthContext } from './store/context';
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Post from './store/postContext';
import { Navigate } from 'react-router-dom';

function App() {
  const {setUser} = useContext(AuthContext)

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  })
  return (
    <div>
 <Post>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Olx-Clone" element={<Navigate to="/" replace/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='view' element={<View/>}/>
    </Routes>
  </Router>
 </Post>
    </div>
  );
}

export default App;
