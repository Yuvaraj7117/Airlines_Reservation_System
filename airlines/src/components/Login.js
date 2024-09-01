import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    
    <div className='container1'> 
          <form action='#'>
          <h3><span>Log </span>in</h3>
          <label htmlFor='userName'>
            <input type='text' placeholder='Enter the User Name' required/>
          </label>
          <label htmlFor='password'>
            <input type='password' placeholder='Enter the Password' required/>
            </label>  
            <button className='submitButton' type='submit'>Submit</button>  
            <p>Already haven't account?&nbsp;<Link to="/signup">SignUp</Link></p>
            </form>
    </div>
    
    </>
  )
};

export default Login;
