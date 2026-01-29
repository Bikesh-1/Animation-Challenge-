import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const videRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
    );
  }, []);

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
    tl.to(videRef.current, { y: 300, duration: 2, scale:2, ease: "power3.out" })
      .to(videRef.current,{y:300 ,x:600, z:400 , duration:1,ease: "power3.out" })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  },[])

  return (
    <div ref={sectionRef} className='bg-[#669bbc] w-screen h-screen p-8 flex items-start justify-center overflow-hidden relative'>
      <video 
        ref={videRef}
        src="https://ik.imagekit.io/jwt52yyie/14891082_1920_1080_30fps.mp4" 
        autoPlay 
        loop 
        muted 
        className="w-1/4 scale-3d rounded-lg shadow-lg"
      />
      <h1 
        ref={textRef} 
        className="absolute left-1/2 top-7 text-4xl font-bold text-white opacity-0 -translate-x-1/2"
      >
        Scroll to reveal the video!
      </h1>
    </div>
  )
}

export default App
