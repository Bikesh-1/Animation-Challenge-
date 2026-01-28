import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GLTFModel({ url }) {
  const gltf = useLoader(GLTFLoader, url)
  const group = useRef()

  useEffect(() => {
    if (!group.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#three-wrapper",
        start: "top top",
        end: "+=1200",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    })

    tl.to(group.current.rotation, {
      y: Math.PI * 2,
      ease: "none",
    }).to(
      group.current.position,
      {
        y: -1,
        // x:4,
        ease: "none",
      },
      
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
    // return () => {
    //     ScrollTrigger.getAll().forEach(st => st.kill());
    //   };
  }, [])

  return (
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  )
}
