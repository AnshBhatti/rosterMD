import React from "react";
import "./App.css";
import { useState, useEffect } from 'react';

const ProfileCard = () => {
  
  const schedulePreference=[1,1,1,0,1,1,1,0,1,0,1,1,1,,0,1,1,0,0,0,1,1];
  const factors=[
    {
       "userId": 1,
       "id": 1,
       "title": "sunt excepturi",
       "body": "quia et suscipit\nsuscipit recusandae consequuntur"
    },
    {
       "userId": 1,
       "id": 2,
       "title": "qui est esse",
       "body": "est rerum tempore vitae\nsequi sint nihil"
    }
 ]

const handleChange =() => {

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
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card" style={{display:'flex', flexDirection:'column', width:'400px', padding:'20px', borderColor:'rgb(64, 146, 134)', borderWidth:'10px'}}>
        <img src={require('./doctor.png')} alt="John" style={{ height: '100%', width: "100%", flex: 1, borderRadius:'20px'}} />
        <h1 style={{color: "rgba(64, 146, 134)"}}>John Doe</h1>
        <p className="title"> </p>
        <p>Grady Memorial Hospital</p>
        <div style={{padding:'15px'}}>
        <p>Age: 42</p>
        <p>Gender: Male</p>
        <p>Household: 4</p>
        <p>Smoker: Yes</p>
        <p>Classification: Specialist</p>
        <p>Monthly Salary: $15,460</p>
        <p>Duty Hours/Week: 30</p>
        <p>Night Shifts/Week: 1-3</p>
        </div>
        <br/>
          <button className="button-63" onClick={handleChange}>Update Roster</button>
      </div>
    </div>
  );
};
export default ProfileCard;