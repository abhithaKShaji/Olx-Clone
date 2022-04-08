import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/context';
import {getAuth,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './Signup.css';
import {collection, addDoc  } from 'firebase/firestore';
import {db} from '../../firebase/config'


export default function Signup() {
  const navigate = useNavigate()
 const [username,setUsername] = useState('')
 const [email,setEmail] = useState('')
 const [phone,setPhone] = useState('')
 const [password,setPassword] = useState('')
 const {firebase} = useContext(firebaseContext)

 const handleSubmit = (e)=>{
   e.preventDefault()
   const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
  console.log(userCredential);
  const user = userCredential.user;
  updateProfile(auth.currentUser,{displayName:username}).then(async()=>{
    
     const docRef = await addDoc(collection(db,"users"),{
       id:userCredential.user.uid,
       username:username,
       phone:phone
     }).then(()=>{
       alert("You have signed up successfully!")
       navigate('/login')
     })
   })
})
 }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
