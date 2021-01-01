import React from 'react'
import { Link } from 'react-scroll'

import './navbar.css'
import MenuButton from '../sidebar/ToggleButton'


function Navbar(props){
    return(
        <header className="navbar">
            <nav className="navigation-bar">
                <div className="toogle-button"><MenuButton click={props.clickHandler} /></div>
                <div className="logo">Judie Paul</div>
                <div className="spacer"/>
                <div className="navbar-items">
                    <ul className="nav-items">
                      
                            <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='profile'
                             > <li>Home</li></Link>
                     
                            <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='project'
                             ><li>Projects</li></Link>
                       

                            <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='about'
                             ><li>About</li></Link>
                    

                            <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='response'
                             ><li>Feedback</li></Link>
                      
                            <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='contact'
                             ><li>Contact</li></Link>
                    
                    </ul>
                </div>
                
            </nav>
        </header>
    );
}

export default Navbar;