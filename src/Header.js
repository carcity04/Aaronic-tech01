import React, { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import Logo from './Asset/Images/logof.png'
import './App.css';
import {LuMenuSquare} from 'react-icons/lu'
import { Link } from 'react-router-dom';
import Aaronic from './Asset/Images/Aaronic.png'


const Header = () => {
  const [menu , setMenu] = useState(false)

    const handleMenu = () => {
   setMenu(!menu)
    }
  return (
    <div>
      <nav class="navbar bar-1 mx-5 ">
  <div class="container m-0 p-0">
  <div className='d-flex  '>
    <img src={Logo} alt='logo'/>
     <img src={Aaronic} alt='navbar-loho' className='navbar-brand'/>
    </div>
      <div >
      <Link to="/"  className='link-up'>Home</Link>
      <Link to="/About" className='link-up'>About us</Link>
      <Link to="/service"  className='link-up'>Service</Link>
      <Link to="/"  className='link-up'> Careers</Link>
      <Link to="/"  className='link-up'>Contact Us</Link>
  


      </div>

  
    <form class="d-flex" role="search">
    <button class="btn  mybtn-1  me-4" type="submit">Contact Us</button>
    <button class="btn  mybtn" type="submit">Get started</button>
   
      </form>
    
  </div>
</nav>
<nav class="navbar bar-2 ">
  <div class="container jail ">
  <div className='d-flex '>
 
    <div>
    <img src={Logo} alt='logo'/>
    </div>
    <div>
    <img src={Aaronic} alt='logo' />
    </div>
  
    <LuMenuSquare className='fs-1  pos menu  ' onClick={handleMenu} />
    </div>


    {menu &&
    <div className='day '>
    <ul >
       
    
       <li> <Link to="/"  className='link-up'>Home</Link></li>
       <li>  <Link to="/About" className='link-up'>About us</Link></li>
       <li>  <Link to="/service"  className='link-up'>Service</Link></li>
       <li>       <Link to="/"  className='link-up'> Careers</Link></li>
       <li>       <Link to="/"  className='link-up'>Contact Us</Link></li>
    
    
     <button class="btn  mybtn-1  me-4" type="submit">Contact Us</button>
    <button class="btn  mybtn" type="submit">Get started</button>
    </ul>
    </div> }


    <form class="d-flex" role="search">

    </form>
  </div>
</nav>


    </div>
  )
}

export default Header
