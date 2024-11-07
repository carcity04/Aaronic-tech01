import React from 'react'
import Group from './Asset/Images/Group 1000004708.png'
import './App.css'
import Icon from './Asset/Images/Icon.png'
import { useContext } from 'react'
import { myContext } from './Context/DataContext'

const Main = () => {
  const {myName}= useContext(myContext)
  return (
    <div>
        <div className='backstroke text-center pt-5 w-100 '>
        <div className=' icon-color  ' >
        <img src={Icon} alt='icon' className=''/>
            welcome to our company</div>

             {myName}
            <div className='text-center text-main w-100'>
            <h1 className='pt-4 logo-2'>Build Your Organization With Our Technics </h1>
<p className='logo-1 w-75'>With documented policies and a robust Safety Management System,
 we are committed to ensuring the well-being of our employees, customers, and the public.</p>
            </div>
<div className='w-100 group-1'>
<img src={Group} alt='group' className='group'/>
</div>


 </div>
    </div>
  )
}

export default Main
