import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
function SignUp() {
  return (
        <div className='container1'> 
          <form action='#'>
          <h3><span>Sign</span> Up</h3>
            <input type='text' placeholder='Enter the User Name' required/>
            <input type='password' placeholder='Enter the Password' required/>
            <input type='password' placeholder='Re-Enter the Password' required/>
            <button className='submitButton' type='submit'>Submit</button>  
            <p>Already have an account?&nbsp;<Link to="/login">Login</Link></p>
            </form>
    </div>
  )
}

export default SignUp