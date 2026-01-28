import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
function App() {
  const langRef = useRef([]);


  useEffect(() =>{
    const tl=gsap.timeline();
    langRef.current.forEach((el,i)=>{
      tl.fromTo(
        el,
        {opacity:1,y:0},
        {opacity:0, y:-900, duration:0.5, ease:"power3.in"}
      )
    })
  },[])

  return (
    <div className='bg-gray-800 w-[100vw] h-[100vh] flex items-center justify-center text-white text-2xl relative'>
      <div className='absolute w-[100vw] h-[100vh] flex'>
        <div ref={(el) => (langRef.current[0] = el)} className='w-[20vw] h-[100vh] bg-yellow-300'></div>
        <div ref={(el) => (langRef.current[1] = el)} className='w-[20vw] h-[100vh] bg-yellow-300'></div>
        <div ref={(el) => (langRef.current[2] = el)} className='w-[20vw] h-[100vh] bg-yellow-300'></div>
        <div ref={(el) => (langRef.current[3] = el)} className='w-[20vw] h-[100vh] bg-yellow-300'></div>
        <div ref={(el) => (langRef.current[4] = el)} className='w-[20vw] h-[100vh] bg-yellow-300'></div>
      </div>
      <h1>Hello, Welcome to My website</h1>
    </div>
  )
}

export default App