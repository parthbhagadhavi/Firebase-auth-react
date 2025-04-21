import React from 'react'
import { useState } from 'react';
import './LoginPage.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    
const navigator=useNavigate()
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    //   const [error, setError] = useState('');
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
     try {
        await  signInWithEmailAndPassword(auth,email,password)
        alert('user login sucsses full')
       
     } catch (error) {
        console.log(error);
        
     }
     setEmail('')
     setPassword('')
      };
      // const logout=async()=>{
      //   try {
      //       await auth.signOut()
      //       alert('user logoutsucsses full')

      //       navigator('/')
      //   } catch (error) {
      //      console.log(error);
            
      //   }
      // }
    
      return (
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
    
            {/* {error && <div className="error">{error}</div>} */}
    
            <div className="form-group">
        <label>Email</label>
        <div className="input-icon">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-icon">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
    
            <button type="submit" onClick={()=>navigator('/profile')}>Login</button>
            {/* <button className="submit-btn" onClick={()=>logout()}>log out</button> */}

          </form>
        </div>
      );
    }
    


export default Login
