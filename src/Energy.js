import React from 'react'
import Group from './Asset/Images/Group 4.png'
import IconY from './Asset/Images/Icon.jpg'
import  'bootstrap/dist/css/bootstrap.css'
import GroupThird from './Asset/Images/Group 1000004718.png'
import { useContext } from 'react'
import { myContext } from './Context/DataContext'




const Energy = () => {
  const {myName}= useContext(myContext)
  const { gender, setGender} = useContext(myContext)
  const handelGender =() =>{
setGender("Male")

  }

  return (



    <div>
      <div className='row'>
      <div className='col'>
      { gender}
   
      {/* <button onClick={handelGender}>Update gender</button> */}
      <img src={Group} alt='group' className='my-5 mx-5 ene'/>  

  
        </div>
      <div className='col energy-main'>

  
      <img src={IconY} alt='icon' className=''/>
            welcome to our company      

       {/* <h1>hello{myName}</h1> */}
    
 <h1 className='energy-1 my-5 mx-4'>Aaronic Energy Provides a Full Range of Services</h1>
<p className='energy mx-5 my-5 py-5 '>Aaronic Energy specialises in oil trading, marine logistics, and ship management which they 
  engage in the buying and selling of crude oil and refined products, ensuring efficient and secure transportation of oil
   and other goods across the globe, utilising a fleet of advanced vessels and overseeing the maintenance, crewing, and 
   operational efficiency of maritime assets.  </p> 
   <img src={GroupThird} alt='group' className='my-5 py-5 '/>   
      </div>


    
      </div>
  

    </div>
  )
}

export default Energy
    