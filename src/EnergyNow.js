import React from 'react'
import Group from './Asset/Images/Group 4.png'
import IconY from './Asset/Images/Icon.jpg'
import  'bootstrap/dist/css/bootstrap.css'
import GroupThird from './Asset/Images/Group 1000004718.png'
import { useContext } from 'react'
import { myContext } from './Context/DataContext'
import './App.css'



const EnergyNow = () => {
  return (
    <div>
        <div className='row'>
            <div className='col'>
            <img src={Group} alt='group' className='my-5 mx-5 ene'/>  

            </div>
            <div className='col'>
            <div className='col energy-main  '>
<img src={IconY} alt='icon' className=''/>
    welcome to our company   

     <h1 className='energy-1 my-5 mx-4'>Aaronic Energy Provides a Full Range of Services</h1>   


 <p className=' my-energy '>Aaronic Energy specialises in oil trading, marine logistics, and ship management which they 
  engage in the buying and selling of crude oil and refined products, ensuring efficient and secure transportation of oil
   and other goods across the globe, utilising a fleet of advanced <br/> vessels and overseeing the maintenance, crewing, and 
   operational efficiency of maritime assets.  </p> 


   <img src={GroupThird} alt='group' className='my-5   group-4  px-5 '/>   
    </div>
            </div>
        </div>
  


   

    </div>
  )
}

export default EnergyNow
