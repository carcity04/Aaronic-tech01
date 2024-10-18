import React from 'react'
import Feature from './Asset/Images/Icon (2).svg'
import Photo from './Asset/Images/Photo.png'
import './App.css'
import SingleT  from './SingleT'
import PhotoQ from './Asset/Images/Photo (1).png'
import  'bootstrap/dist/css/bootstrap.css'
import PhotoW from './Asset/Images/Photo (2).png'
import PhotoE from './Asset/Images/Photo (3).png'
// import PhotoA from './Asset/Images/Photo (1).png'

const Features = () => {
  return (
    <div className='Feature py-5'>
    
    <div className=' '>
        <div className='feat text-center d-flex  my-5'>
        <img src={Feature} alt='icon' className='px-2'/>
        <h4>CORE FEATURES & QUALITY MANAGEMENT</h4>
        </div>

<h1 className='fea my-5'>What Makes Us Different</h1>


<div className='row fourty'>
  <div className='col '>
  <SingleT
wrapper={
<div className='warpper text-center mx-4'> 
<div className='box-1'>
<img src={Photo} alt='photo-1' className='' />
</div>
<div className='box-2'>
<h5>Early engagement</h5>
<p>Early engagement enables us to integrate innovative technologies, 
environmental considerations, and regulatory compliance, ensuring
 projects are executed efficiently.</p>
</div>
</div>

}/>

  </div>
  <div className='col '>
  <SingleT
wrapper={
<div className='warpper text-center mx-1'> 
<div className='box-1'>
<img src={PhotoQ} alt='photo-1' className='' />
</div>
<div className='box-2 '>
<h5>Integrity</h5>
<p>Integrity is the cornerstone at Aaronic Energy Limited. Our commitment permeates 
  every aspect of our operations, from decision-making to client 
  relationships and community engagement.</p>
</div>
</div>

}/>
  </div>
  <div className='col g-0 '>
  <SingleT
wrapper={
<div className='warpper text-center mx-1'> 
<div className='box-1'>
<img src={PhotoW} alt='photo-1' className='' />
</div>
<div className='box-2'>
<h5>Solution</h5>
<p>Our dedication to solution-oriented approaches means 
  we don't just identify problems; we actively seek out 
  opportunities for improvement and innovation.</p>
</div>
</div>

}/>

  </div>
  <div className='col '>
  <SingleT
wrapper={
<div className='warpper text-center mx-1'> 
<div className='box-1'>
<img src={PhotoE} alt='photo-1' className='' />
</div>
<div className='box-2'>
<h5>Innovation</h5>
<p>We remain at the forefront of the energy transition, poised to seize opportunities, 
  overcome obstacles, and lead the way towards a more sustainable and prosperous future for all.</p>
</div>
</div>

}/>

  </div>
</div>





</div>
    </div>
  )
}

export default Features
