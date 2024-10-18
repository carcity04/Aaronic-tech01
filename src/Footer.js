// import {React, useEffect, useRef} from 'react'

import Star from './Asset/Images/Group (1).png'
import  'bootstrap/dist/css/bootstrap.css'
import Logo from './Asset/Images/logof.png'
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import Slider from './Slider'
const Footer = () => {
  // const myGreetRef = useRef()

  // console.log(myGreetRef.current)
  //   // myGreetRef.current.textContent = "hi"
  //   //   console.log(myGreetRef.current)
  //   useEffect(()=>{
  //     myGreetRef.current.textContent = "hi"

  //   },[])
  return (
    <div>
      <div className='footer  '>
   
        {/* <div className=' ' >
        <div className='box-A d-flex '>
      <div className=' w-50'>
      <img src={Ellipe} alt='icon' className=''/>

      </div>
    
  
    <span ref={myGreetRef}> good afternoon</span>
   <h3 className='sm'>John Davis | </h3> <span>KEM-KEM CEO. </span> 
   
<p>Highly reliable and responsive team!</p>

<img src={Star} alt='' className='w-25'/>

</div>
</div> */}
<p className='text-center'>trusted by 20,000+ clients
  <img src={Star} alt=''/>
</p>
<h3 className='text-center'>These Company trust us.</h3>
{/* 
<div className='row'>
  <div className='col'>

  <div className='box-A d-flex my-5 mx-5'>
<div className=' w-25 '>
      <img src={Ellipe} alt='icon' className=''/>

      </div>
      <div>
      <h3 className='sm'>John Davis | </h3> <span>KEM-KEM CEO. </span>     
<p>Highly reliable and responsive team!</p>
<img src={Star} alt='' className=''/>
      </div>
  
</div>

<div className='box-A d-flex  mx-5'>
<div className=' w-25 '>
      <img src={EllipseThree} alt='icon' className=''/>

      </div>
      <div className='px-4'>
      <h3 className='sm'> Dare Onajimi | </h3> <span>  ONAM & CO. Founder.  </span>     
<p>    
Their expertise in the industry and commitment to quality
 ensured smooth transactions and reliable delivery.</p>
<img src={Star} alt='' className=''/>
      </div>


  
</div>
<div className='box-A d-flex my-5 mx-5'>
<div className=' w-25 '>
      <img src={EllipseSix} alt='icon' className=''/>

      </div>
      <div className='px-4'>
      <h3 className='sm'>  Aishat kamar | </h3> <span>   Kamco Founder & CEO. </span>     
<p> Their team demonstrated deep industry knowledge and integrity in every interaction.</p>
<img src={Star} alt='' className=''/>
      </div>

   
   
  
</div>

  </div>
//   {/* second row */}
{/* 
//   <div className='col'>
//   <div className='box-A d-flex my-5 mx-5'>
// <div className=' w-25 '>
//       <img src={EllipseTwo} alt='icon' className=''/>

//       </div>
//       <div className='px-4'>
//       <h3 className='sm'> Kim Mary |</h3> <span>   Uhi-chan LTD. MD.  </span>     
// <p>      Their dedication to customer satisfaction and adherence to high
//    standards set them apart in the industry.</p>
// <img src={Star} alt='' className=''/>
//       </div>
   

  
// </div>  
// <div className='box-A d-flex my-5 mx-5'>
// <div className=' w-25 '>
//       <img src={EllipseFour} alt='icon' className=''/>

//       </div>
//       <div className='px-4'>
//       <h3 className='sm'>   Liyas Aleshin | </h3> <span>       Memo B Co-Founder. </span>     
// <p> Excellent experience working with Aaronic Energy Limited 
// for our oil trading requirements.</p>
// <img src={Star} alt='' className=''/>
//       </div>


  
// </div>

// <div className='box-A d-flex my-5 mx-5'>
// <div className=' w-50 '>
//       <img src={EllipseFive} alt='icon' className=''/>

//       </div>
//       <div className='px-4'>
//       <h3 className='sm'> Kemi Bakare |</h3> <span> Melbond CEO. </span>     
// <p>  Top-notch service from aaronic Energy Limited in marine logistics as 
//   Their attention to detail and proactive approach made our shipping experience hassle-free.</p>
// <img src={Star} alt='' className=''/>
//       </div>



  
// </div>

//   </div>
// </div>
// </div> */} 
<div className='mx-5 my-5'>
<Slider className=''/>
</div>
   
</div>
<div className='Footer-b my-5 w-100'>

    <div className='row'>
      <div className='col'>
      <div className='d-flex mx-5 '>
    <img src={Logo} alt='logo'/>
    <h1 class="navbar-brand logo">Aaronic</h1>
    </div>
      </div>
      <div className='col'>
        <p>company</p>
        <p>Ship Management </p>
        <p> Oil & Gas Trading </p>
        <p> Marine Logistics</p>
        <p> Sailors Management New </p>





      </div>
      <div className='col'>
        <p> Solutions</p>
        <p>Oil & Gas </p>
        <p>Crude Oil</p>
        <p> Fuel Oil</p>
        <p> Gasoline</p>
    



      </div>
      <div className='col'>
        <p> Resources</p>
        <p> Social Proof </p>
        <p> Contact Us</p>
        <p> Help Center</p>
        <p> FAQs</p>




      </div>
    </div>
<hr />

 


<div className='d-flex flex-row-reverse '>
<TfiTwitter className='fs-4 mx-2' />
<IoLogoInstagram className='fs-4 mx-2' />
<LuLinkedin className='fs-5 mx-2'  />
</div>

  <p>aaronic@2024. All rights reserved.</p>



</div>

    

  
    </div>
  )
}

export default Footer
