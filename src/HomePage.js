//imports
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { auth } from './firebase';
import { Portal, Box, useDisclosure, flexbox } from "@chakra-ui/react";
import Footer from "./components/footer/FooterAdmin.js";
// Layout components
import Navbar from "./components/navbar/NavbarAdmin.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import { SidebarContext } from "./contexts/SidebarContext";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import logo from "./Tab_Logo.png"
import appRoutes from "./routes.js"
import CustomScheduler from './CustomScheduler';
import SignUpPage from './SignUpPage';
import ProfileCard from './ProfileCard';
const HomePage = (props) =>{

//const [error, setError] = useState('');
//const {state} = useLocation();
//const {username} = state; 
//<Sidebar routes={appRoutes} logoText={"DASHBOARD"} variant="opaque" {...logo}/>
//React.useEffect(() => {
  //  setError(username);
  //}, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [provider, setProvider] = useState('');
  const [employee_id, setEmployeeId] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  var x= document.getElementById("test-1");
  var y= document.getElementById("test-2");
  if (x.style.display=='none')
  {
      x.style.display='flex';
      y.style.display='none';
  } else {
      x.style.display='none';
      y.style.display='flex';
  }

};


return (
    <div className="home-page" style={{display: 'flex', textAlign:'center'}}>
        <div style={{flex: 1}}><Sidebar routes={appRoutes} logoText={"DASHBOARD"} variant="opaque" {...logo}/></div>
        <div style={{flex: 2, marginLeft:'190px', position:'sticky'}}>
              <div id= "test-1" style={{display:'none'}}>   <div className="sign-up-page" style={{textAlign:'center', fontFamily: 'Easterica', color: 'white', fontSize: "20px", borderColor: 'white'}}>
                    <form onSubmit={handleSubmit} style ={{textAlign:'center'}}>
                    <div style={{borderColor: 'white', paddingLeft:'50px', paddingTop:'50px'}}>
                    <img src={require('./only_logo.png')} style={{width: "20%", height: "20%"}} alt="RosterM.D."/>  
                      <h1>Roster Review</h1>
                      {error && <p className="error" style ={{color:"#F36639"}}>{error}</p>}
                      <div className="form-group" style={{ padding:"20px",textAlign:'center'}}>
                        <input
                          type="text"
                          placeholder='How often do you feel tired?'
                          className='form-input1'
                          id="username"
                          value={provider}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div><br/>
                      <div className="form-group" style={{padding:"20px",textAlign:'center'}}>
                        <input
                          type="text"
                          placeholder='How often do you feel hopeless?'
                          className='form-input1'
                          id="username"
                          value={provider}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <br/>
                      <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
                        
                        <input
                          type="provider"
                          placeholder='How often do you have difficulties sleeping?'
                          className='form-input1'
                          id="provider"
                          value={provider}
                          onChange={(e) => setProvider(e.target.value)}
                        />
                      </div>
                      <br/>
                      <div className="form-group" style={{padding:"20px", textAlign:'center'}}>
                        <input
                          type="employee_id"
                          placeholder='How often do you feel trapped?'
                          className='form-input1'
                          id="employee_id"
                          value={employee_id}
                          onChange={(e) => setEmployeeId(e.target.value)}
                        />
                      </div>
                      <br/>
                      <button type="submit" className='button-63'>Assess</button><br/><br/>
                      <button type="button" className='button-63'>Reset</button>
                    </div>
                    </form>
                    <br/>
                  </div>

                  </div>

    <div id= "test-2" style={{display:'flex', textAlign:'center', marginTop:"100px", marginLeft:"30px"}}>
      <ProfileCard />
  
    </div>



        </div>
        <div style={{flex: 3, width: '400px', height: '0'}}><CustomScheduler/></div>
    </div>


);

};
export default HomePage
    