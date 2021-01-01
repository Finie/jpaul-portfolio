import React from 'react'

import { Link } from 'react-scroll'
import './sidebar.css'
function Sidebar(props){

    let sideBarClass = 'side-bar';
    if(props.show){
        sideBarClass = 'side-bar open'
        console.log("sidebar opened")
    }

    return(
        <nav className={sideBarClass}>
            <div className="logo-holder">Judie Paul</div>
            <ul>
                <Link
                             activeClass="active"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}
                             to='profile'
                             ><li>Home</li></Link>
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
                             to='contsct'
                             ><li>Contact</li></Link>
            </ul>
        </nav>
    );
}


export default Sidebar;