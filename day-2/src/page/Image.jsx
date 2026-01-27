import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';


function Image() {
    const scroll = new LocomotiveScroll();
  return (
    <div className=' bg-gray-900 w-[100vw] h-[200vh] flex items-center justify-center gap-10  '>
        <div data-scroll data-scroll-speed="0.5" className='flex flex-col gap-4 justify-center items-center'>
            <img className='w-60' src="https://images.unsplash.com/photo-1762532986026-92782fe01fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://images.unsplash.com/photo-1768881140772-f49f7555d9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://plus.unsplash.com/premium_photo-1736782400256-78c23f2d3a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div data-scroll data-scroll-speed="1" className='flex flex-col gap-4 justify-center items-center'>
            <img className='w-60' src="https://images.unsplash.com/photo-1768881121797-ed29006966c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://images.unsplash.com/photo-1768873494900-3b666f8625e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://images.unsplash.com/photo-1768873800529-12451fabe4af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div data-scroll data-scroll-speed="-1" className='flex flex-col gap-4 justify-center items-center'>
            <img className='w-60' src="https://images.unsplash.com/photo-1671639334426-e27d616492f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://images.unsplash.com/photo-1768586624424-7077d4ddbfa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-60' src="https://images.unsplash.com/photo-1768739538833-73a1923a0d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Image