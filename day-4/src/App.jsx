import { useRef ,useEffect} from 'react'
import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 gsap.registerPlugin(ScrollTrigger);
import Three3d from './Components/Three3d'



function App() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const rotRef = useRef(null);

  
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:sectionRef.current,
        start: "top+=1 top", 
        end: "+=1200", 
        pin:true,
        scrub:1,
        // markers: true,
      }
    });
    tl.to(textRef.current, { y: -250, duration: 1, scale:0.1, ease: "power3.out" })
    .to(textRef.current,{y:-250 ,x:-600,duration:1,ease: "power3.out" })
    .to(rotRef.current,{opacity:1,duration:1})
    

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  },[])
  
  

  return (
    <div>
          <div ref={sectionRef} className="flex relative flex-col justify-center items-center w-screen h-screen text-white" 
    style={{
    background: 'radial-gradient(circle, #ff4d4d 0%, #b22222 60%, #8B0000 100%)',
  }}>
      <h1 ref={textRef} className='text-[15rem] absolute top-32'>FORMULA 1</h1>
      
      <div>
        
        <p ref={rotRef} className='absolute bottom-4 left-1/2 mb-8 text-[3rem] font-semibold tracking-wide -translate-x-1/2 opacity-0'>
          "The Pinnacle of Motorsport"
        </p>
        
      </div>
      

      < Three3d/> 
   
      
      
      
    </div>

    </div>

      
  )
}

export default App
