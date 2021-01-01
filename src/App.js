import React,{useState} from 'react'

import Profile from "./components/profile/Profile"
import Project from './components/projects/Projects'
import About from './components/about/About'
import Response from './components/response/Response'
import Footer from './components/footer/Footer'
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Sidebar from './components/sidebar/Sidebar'
import Backdrop from './components/backdrop/Backdrop'

function App() {

  const [isSideDrawerOpen,setIsSideDrawerOpen] = useState(false);

  const drawerToggleButtonHandler = () =>{
    setIsSideDrawerOpen((!isSideDrawerOpen))
  }

  
  const backdropClickHandler = () =>{
    setIsSideDrawerOpen(false)
  }


  let backDrop = null;

  if(isSideDrawerOpen){
    backDrop = <Backdrop backdropClick={backdropClickHandler} />
  }



  return (
    <div className="App">
      <Navbar clickHandler={drawerToggleButtonHandler}/>
      <Sidebar show={isSideDrawerOpen}/>
      {backDrop}
      <Profile />
      <Project />
      <About />
      <Response />
      <Footer />
    </div>
  );
}

export default App;
