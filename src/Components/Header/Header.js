import React,{useContext, useState} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/context';
import {getAuth, signOut} from 'firebase/auth'
import {Link, useNavigate} from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(firebaseContext)
  
  
  const handleSell = (e)=>{
    e.preventDefault()
    {user ? navigate('/create') : navigate('/login')}
  }


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user ? `Welcome ${user.displayName}` : <Link to='/login'>
          <span>Login</span> </Link> }
          <hr />
        </div>
        {user && <span onClick={()=>{
          const auth = getAuth();
          signOut(auth);
          navigate('/')
        }}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={handleSell}>
            <SellButtonPlus></SellButtonPlus>
           <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
