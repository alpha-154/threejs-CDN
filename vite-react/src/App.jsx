import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import React, { useRef} from "react";

const RotatingCube = () => {

  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#468585" emissive="#468585" />

      <Sparkles count={1000} scale={1} size={5} speed={0.002} color={0x9CDBA6}  noise={0.2}/>
    </mesh>
  )
}

  /**
   * The main app component. This component renders a canvas that covers the 
   * entire screen. It includes an OrbitControl for the user to control the 
   * camera, a directional light to illuminate the scene, a background color, 
   * and a RotatingCube.
   */
const App = () => {
  return (
    <Canvas style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color args={["#F0F0F0"]} attach="background" />
      <RotatingCube/>
    </Canvas>
    
  )
}

export default App;