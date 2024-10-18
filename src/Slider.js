import React, { useState } from 'react'
import Arrow from './Asset/Images/Group (5).png'
import ArrowSec from './Asset/Images/Group (6).png'

const Slider = () => {
  const images = [
    'https://i.ibb.co/r4VZTFs/Group-2.png',
    ' https://i.ibb.co/Zx34V2S/Group-3.png',
    'https://i.ibb.co/PZzy3gX/Group-4.png'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  const prev = () => {
    setCurrentImageIndex((prevIndex) => {
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  return (
    <div>
    
      <img src={images[currentImageIndex]} alt="Slider" width="1000px" />
      
      <button onClick={prev} className='btn'><img src={Arrow} alt='arrow'/></button>
      <button onClick={next} className='btn'><img src={ArrowSec} alt='Arrow'/></button>

    </div>
    
  )
}

export default Slider