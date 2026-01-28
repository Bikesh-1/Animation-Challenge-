import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import GLTFModel from './GLTFModel'



export default function Three3d() {
  return (
    <div id="three-wrapper" className='w-screen h-screen'>
      <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={10} />
      <directionalLight position={[1, 1, 1]} intensity={10} />

      <GLTFModel
        url="/scene.gltf"
        
        // rotation={[0, Math.PI / 4, 0]}
        scale={1}
      />
    </Canvas>
    </div>

  )
}
