import React, { useState,useContext } from 'react';
import {firebaseContext} from '../../store/context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(firebaseContext)
  const navigate = useNavigate()

  const handleLogin = (e)=>{
   e.preventDefault()
   const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password).then(()=>{
     navigate('/')
   }).catch((error)=>{
      alert(error.message)
   })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'><a>Signup</a></Link>
      </div>
    </div>
  );
}

export default Login;
