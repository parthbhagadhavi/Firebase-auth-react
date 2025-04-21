import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase';
import './Sign.css'
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function Singnup() {
const nav=useNavigate()
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
await createUserWithEmailAndPassword(auth,email,password)

const user=auth.currentUser
if(user){
  await setDoc(doc(db,'users',user.uid),{
email:user.email,
fullName:fullName
  })
  nav('/login')
}
console.log(user.email);

        }catch(error){
            console.log(error);
            
        }
        setFullName('')
        setConfirmPassword('')
        setEmail('')
        setPassword('')
      };
    
      return (
        <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sign Up</h2>
  
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-icon">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
  
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
                placeholder="Create a password"
                required
              />
            </div>
          </div>
  
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-icon">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                required
              />
            </div>
          </div>
  
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>
      </div>
        );
      
    }
    


export default Singnup
