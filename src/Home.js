import React from 'react'

import './App.css';
import Main from './Main';
import Partner from './Partner';
import Energy from './Energy';
import Features from './Features'
import Vision from './Vision';
import Footer from './Footer';
import EnergyNow from './EnergyNow';

const Home = () => {
  return (
    
    <div>
           <Main/>

       <Partner/>
     
 
       {/* <Energy/> */}
       <EnergyNow/>
       <Features/>
       <Vision/>
       <Footer/>
    </div>
  )
}

export default Home
