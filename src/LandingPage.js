import React, { useState, Component } from "react";
import Configs from './configurations.json';
import ParticlesBg from 'particles-bg'
import { flexbox } from "@chakra-ui/system";
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {

    const navigate = useNavigate();
        function handleSignUp(event) {
            navigate('/sign_up');
          }
          function handleLogin(event) {
            navigate('/login');
          }
      return (
            <main className="App-main">
            
              <div className="container" style={{textAlign: 'center'}}>
                <img src={require('./Logo.png')} style={{width: "75%", height: "75%"}} alt="RosterM.D."/>
                <div className="tagline" style={{textAlign: 'center'}}>
            
                  <div style={{display: 'flex', flexDirection: "row", padding: "20px"}}>
                  <div style={{paddingLeft: "100px", paddingRight: "100px"}}></div>
                  <button className="button-63" style={{fontSize: "40px", flex: "5%", height: "80px"}} type="button" onClick={handleLogin}>Log In</button>
                  <div style={{padding: "20px"}}></div>
                  <button className="button-63" style={{fontSize: "40px", flex: "5%" , height: "80px"}} type="button" onClick={handleSignUp}>Sign Up</button>
                  <div style={{paddingLeft: "100px", paddingRight: "100px"}}></div>
                </div>
              </div>
          </div>
          </main>
      );
    }
  export default LandingPage;