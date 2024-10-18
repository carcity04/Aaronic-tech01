import React from 'react'
import Vector from './Asset/Images/Vector.svg'
import BigGroup from './Asset/Images/Group 32.png'
import Contact from './Asset/Images/Group 1000002332.png'
import { PiPhoneCall } from "react-icons/pi";
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Vision = () => {
  return (
    <div>
      <div class="container text-start">
  <div className="row direction">
    <div className="col my-5">
<div className='d-flex'>
    <img src={Vector} alt=''/>
Our Key Responsibility Values
</div>

<h3 className='big'>Core Values</h3>
<p className='small'>Our business transactions are based on trust; we are committed to the highest standards
     of professionalism and our business code of ethics. We believe in transparency as the 
     foundation of our ambition to create lasting value, upholding the interests of our clients, 
     employees, and the communities where we operate. We act with a sense of urgency, to demonstrate 
     our ability to respond to client needs with real, tangible, and proactive solutions that strengthen 
     customer confidence and reinforce our market credibility.</p>
<h3 className='big'>Our Mission & Vision</h3>
<p className='small'>We are committed to the highest standards of professionalism we believe in transparency as the foundation
     of our ambition to create lasting value, upholding the interests of our clients, employees, and the communities 
     where we operate. We act with a sense of urgency, to demonstrate our ability to respond to client needs with real, 
     tangible, and proactive solutions that strengthen customer confidence and reinforce our market credibility.</p>


    </div>
    <div className="col my-5">
   <img src={BigGroup} alt='' className='big-group'/>
    </div>
  
  </div>
</div>
<div className='vision text-center pt-5'>
<h1 className='explore'>Contact Aaronic Energy Today</h1>
<p className='small-1'>Reach out to us with your inquiries or to explore partnership opportunities.
Get Started</p>
<button className='btn mybtn-2'>Get started</button>
</div>

<div class="container text-start my-5">
  <div class="row direction">
    <div class="col">
  <h1 className='big my-5'> Reach Out to Us</h1>
  <div className='d-flex'>
  <PiPhoneCall className='fs-4 mx-2' />
  <p>+(234) 707-337-3241.</p>
  </div>
<div className='d-flex'>
<TfiTwitter className='fs-4 mx-2' />
<p>Aaronicenergylimited</p>
</div>
<div className='d-flex'>
<IoLogoInstagram className='fs-4 mx-2' />

<p>Aaronicenergylimited</p>
</div>
<div className='d-flex' >
<LuLinkedin className='fs-5 mx-2'  />
<p>Aaronicenergylimited</p>
</div>
<div className='d-flex'>
<CiMail  className='fs-5 mx-2'  />
<p>support@Omni_X.network | support@omni-X.network </p>
</div>
<div className='d-flex'>
<CiLocationOn className='fs-5 mx-2' />
<p>Opebi road, Ikeja, Lagos State</p>
</div>


    </div>
    <div class="col">
      <img src={Contact} alt=''/>
    </div>

  </div>
</div>
    </div>
  )
}

export default Vision
