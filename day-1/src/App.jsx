import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 gsap.registerPlugin(ScrollTrigger);
import './App.css'

function App() {
  const langRef = useRef([]);
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef([]);


  useEffect(() =>{
    const tl = gsap.timeline({repeat:2});
    langRef.current.forEach((el,i)=>{
      tl.fromTo(
        el,
        {opacity:0,y:50},
        {opacity:1,y:0,duration:1,ease:"power2.out"}
      ).to(el,{opacity:0,y:-50,duration:1,delay:1});
    })
  },[]);

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
    tl.to(imgRef.current, { y: -300, duration: 2, scale:0.5, ease: "power3.out" })
    .to(imgRef.current,{y:-300 ,x:-600,duration:1,ease: "power3.out" })
    .to(langRef.current,{scale:0})
    .to(textRef.current,{opacity:1,duration:2,ease:"power3.out"})

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  },[])

  return (
    <div className="overflow-hidden" >
      <div ref={sectionRef} className="bg-black w-[100vw] min-h-[100vh] flex items-center justify-center" >
        <img  ref={imgRef} className="w-96" src="https://ik.imagekit.io/sharewallet/ShareWalletLogo.png?updatedAt=1749731128688"/>
        <h1 className="font-semibold text-white text-[2rem] m-0 leading-none w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0" ref={textRef}>Built on trust, powered by people.</h1>
      <div  className="relative h-[5.2rem] w-auto ">
        
            <h1
              ref={(el) => (langRef.current[0] = el)}
              className="font-semibold text-white text-[4rem] m-0 leading-none w-auto absolute inset-0"
            >
               Save
            </h1>
            <h1
              ref={(el) => (langRef.current[1] = el)}
              className="font-semibold text-white text-[4rem] m-0 leading-none absolute inset-0"
            >
              Secure
            </h1>
            <h1
              ref={(el) => (langRef.current[2] = el)}
              className="font-semibold text-white text-[4rem] m-0 leading-none absolute inset-0"
            >
              Fast
            </h1>
            <h1
              ref={(el) => (langRef.current[3] = el)}
              className="font-semibold text-white text-[4rem] m-0 leading-none absolute inset-0"
            >
              Transparent
            </h1>
            <h1
              ref={(el) => (langRef.current[4] = el)}
              className="font-semibold text-white text-[4rem] m-0 leading-none absolute inset-0"
            >
              simple
            </h1>
          </div>
      </div>
    </div>
  )
}

export default App
