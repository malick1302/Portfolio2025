import React, { useEffect } from 'react';
import { gsap } from 'gsap'; 

export default function LogoCompet() {

  useEffect(() => {
    
    gsap.to(".logo", {
      x: () => Math.random() * 500 - 250, 
      y: () => Math.random() * 500 - 250,  
      rotation: () => Math.random() * 360, 
      duration: 3,  
      ease: "power1.inOut",  
      repeat: 1,  
      yoyo: true,  
    });
  }, []); 

  return (
    <div className='w-100 m-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-12 lg:ml-30 xl:ml-60 xl:w-300'>
      <img src="src/assets/photo/html-5.svg" alt="logo HTML" className='logo w-20' />
      <img src="src/assets/photo/css-alt.svg" alt="logo CSS" className='logo w-20' />
      <img src="src/assets/photo/js.svg" alt="logo Javascript" className='logo w-20' />
      <img src="src/assets/photo/react.svg" alt="logo React" className='logo w-20' />
      <img src="src/assets/photo/github.svg" alt="logo Github" className='logo w-20' />
      <img src="src/assets/photo/mysql.svg" alt="logo MySql" className='logo w-20' />
      <img src="src/assets/photo/tailwind.svg" alt="logo Tailwind" className='logo w-20' />
      <img src="src/assets/photo/bootstrap.svg" alt="logo Bootstrap" className='logo w-20' />
      <img src="src/assets/photo/sass.svg" alt="logo SASS" className='logo w-20' />
    </div>
  );
}
