import React, { useState } from 'react'
import './Login.css'
import eren from "./Imagees/white.png";
import { Link } from "react-router-dom";
import {auth} from "./firebase";

function Login() {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const signin = e =>{
    e.preventDefault();
  }
  const register = e => {
    e.preventDefault();
    
    // auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //       //it successfully created new user with email and password
    //       console.log(auth);
    //     })
    //     .catch (error => alert(error.message))

  }
  return (
    <div className='login'>
        <Link to='/'>
            <img 
                className='login__logo'
                src={eren}
            />
        </Link>
        <div className='login__container'>
          <form> 
             
            <h1>Sign-in</h1>
            <h5>
              E-mail
            </h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> 
            <h5>Password</h5>
            <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={signin} type='submit' className='login__signInButton'>Sign In</button>
          </form>
          <p> 
            Sign in to Animeverse !!
          </p>
          <button onClick = {register} className='login_regsiterButton'> Create an Animeverse account</button>
        </div>
    </div>

  )
}

export default Login
