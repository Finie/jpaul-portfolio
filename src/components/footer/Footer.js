import React from 'react'
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaPhoneAlt,
    FaHeart
  } from "react-icons/fa";

import './footer.css'

function Footer(){
return(
    <div id="contact" className="footer-container">
        
        <hr/>

        <section className="footer-subscription">
        <h2 className="footer-subscription-heading">Services</h2>
        <div class="technologies">

          <span>
              <p>Copywriting</p>
          </span>

          <span>
              <p>SEO writing</p>
          </span>

          <span>
              <p>Artical writing</p>
          </span>

          <span>
             <p>Proofreading</p>
          </span>

          <span>
              <p>Research</p>
          </span>

        </div>
      </section>




      <div className="footer-links">

        <div className="footer-link-wrapper">

        <div className="footer-link-items">
            <h2>Social Media</h2>

            <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/judie-paul-2015">
              <FaLinkedin className="icons" /> LinkedIn
            </a>
         
            <a target="_blank" rel="noreferrer" href="https://twitter.com/judiepaul555">
              <FaTwitter className="icons" /> Twitter
            </a>

            <a href="/">
              <FaInstagram className="icons"/> Instagram
            </a>

           

          </div>


          <div className="footer-link-items">
            <h2>Fields </h2>
            <a href="/">Technology 
            </a>
            <a href="/">Blockchain 
            </a>
            <a href="/"> Cryptocurrency 
            </a>
            <a href="/">Finance Writer
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Contacts</h2>
            <a href="tel:+254728790349"><FaPhoneAlt /> +254728790349 </a>
            <a href="mailto:judiepaul55@gmail.com">judiepaul55@gmail.com</a>
          </div> </div>

      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights"> Judie Paul © 2021 all rights reserved.   Built with <FaHeart style={{color:"red"}} /> by <a target="_blank" rel="noreferrer"  href="https://phenius-muthomi.web.app/" ><b>Fin</b></a> </small>
          
          <div className="social-icons">
          </div>
        </div>
      </section>


    </div>
);
}


export default Footer;