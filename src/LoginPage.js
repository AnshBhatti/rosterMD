import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { Center } from '@chakra-ui/react';

    const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [provider, setProvider] = useState('');
  const [employee_id, setEmployeeId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !employee_id || !provider) {
      setError('Please enter a Username, Password, Provider, and Employee ID');
      return;
    }

    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home", {state: { username: user.email}})
            //setError(user.email);
        })
      .catch((error) => {
        setError(error.message);
      });

    // clear form and error message
    setUsername('');
    setPassword('');
    setProvider('')
    setEmployeeId('')
    setError('');
  };

  const navigate = useNavigate();

  function handleSignUp(event) {

    navigate('/sign_up');
  }

  return (
    <div className="login-page" style={{textAlign:'center', fontFamily: 'Easterica', color: 'white', fontSize: "40px", borderColor: 'white'}}>
      <form onSubmit={handleSubmit} style ={{textAlign:'center'}}>
      <div style={{borderColor: 'white'}}>
      <img src={require('./only_logo.png')} style={{width: "10%", height: "10%"}} alt="RosterM.D."/>  
                  <h1>Employee Login</h1><br />
        {error && <p className="error" style ={{color:"#F36639"}}>{error}</p>}
        <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            className='form-input'
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className='form-input'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
          <label htmlFor="provider">Provider: </label>
          <input
            type="provider"
            className='form-input'
            id="provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
        </div>
        <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
          <label htmlFor="employee_id">Employee ID: </label>
          <input
            type="employee_id"
            className='form-input'
            id="employee_id"
            value={employee_id}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <button type="submit" className='button-63'>Login</button>
        </div>
      </form>
      <br />
      <button type="button" className='button-63' onClick={handleSignUp}>Sign Up</button>
    
    </div>
  );
};

export default LoginPage;