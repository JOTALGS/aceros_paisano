import React, {useRef, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

function Model(props) {
    const groupRef = useRef();
    const { nodes, materials } = useGLTF('./models/classic_roof_rib_steel_sheet.glb');
  
    useEffect(() => {
      // Create the GSAP animation tied to ScrollTrigger
      gsap.to(groupRef.current.rotation, {
        x: Math.PI * 2 - Math.PI / 4,   // Rotate a full circle on the x-axis
        scrollTrigger: {
          trigger: '#model-canvas', // The canvas container
          start: 'top top',  // When the top of the canvas hits the top of the viewport
          end: 'bottom bottom',  // When the bottom of the canvas hits the bottom of the viewport
          scrub: true,  // Smooth scrubbing based on the scroll position
        }
      });
    }, []);

    return (
      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Steel_sheet_rib}
          rotation={[-Math.PI / 8, 0, 0]}
          scale={[0.05, 0.05, 0.05]}
        />
      </group>
    )
  }

export default function SteelSheet() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <pointLight position={[0,0,0]} />
            <OrbitControls/>
            <Model />
        </Canvas>
    );
}
