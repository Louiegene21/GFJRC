import React from 'react';
import "./LoginPage.css";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";




function LoginPage() {
  return (
   <div className='container'>
    <div className='header'>
      <img className="logo" src="/images/logo.jpg" alt="" />
      <div className='text'>Login</div>
    </div>
    <div className='inputs'>
    <div className='input'>
        <CiUser className='img'/>
        <input type="username" placeholder='Username'/>
      </div>
      <div className='input'>
        <CiLock className='img'/>
        <input type="password" placeholder='Password'/>
      </div>
    </div>
    <div className='submit-container'>
      <button className='login'>Login</button>
    </div>
    <div className='forgot-password'>forgot password? <span>Click Here</span></div>
   </div>
  );
}

export default LoginPage;
