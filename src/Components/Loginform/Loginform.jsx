import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Loginform.css';
 const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/><FaUserAlt className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  required/> <FaLock className='icon'  />
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password</a>
               
            </div>
            <button type='submit'>Login</button>
           <div className='register-link'> <p>Don't have an account? <a href="#">Register</a></p></div>
        </form>
    </div>
  )
}
export default Loginform;