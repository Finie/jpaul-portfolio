import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import './profile.css'


function Profile(){
    return(
        <div id="profile" className="profile-container">
        <h1 className="logo-name">Judie <span style={{color:"#FFB23C"}}>Paul</span></h1>
        <section className="logo-description"> <span style={{color:"#FFB23C"}}> | </span>Freelance writer for Technology  Blockchain  Cryptocurrency & Finance  <span style={{color:"#FFB23C"}}> | </span></section>
       <div className="social-icon">
         <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/judie-paul-2015">   <FaLinkedin style={{ width:30,height:30}} /> </a>
     <a target="_blank" rel="noreferrer" href="https://twitter.com/judiepaul555"><FaTwitter style={{ width:30,height:30}} /></a>
     <a href="/"> <FaInstagram style={{ width:30,height:30}} /></a>
       
      

       </div>
        </div>
    );
}


export default Profile;