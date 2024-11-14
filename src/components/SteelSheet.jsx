import React, {useRef, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

function Model(props) {
    const groupRef = useRef();
    const { nodes, materials } = useGLTF('./models/tmt_bar__anil.glb');
  
    useEffect(() => {
      // Create the GSAP animation for rotation and scale
      gsap.to(groupRef.current.rotation, {
        x: Math.PI / 1.5 , // Rotate a full circle on the x-axis
        scrollTrigger: {
          trigger: '#model-canvas', // The canvas container
          start: 'top top',  // When the top of the canvas hits the top of the viewport
          end: 'bottom 40vh',  // When the bottom of the canvas hits the bottom of the viewport
          scrub: true,  // Smooth scrubbing based on the scroll position
        }
      });
  
      // Create the GSAP animation to scale the model when the bottom of the canvas hits 50% of the viewport width
      gsap.to(groupRef.current.scale, {
        x: 0.5,  // Change scale to 2x along the x-axis
        y: 0.5,  // Change scale to 2x along the y-axis
        z: 0.5,  // Change scale to 2x along the z-axis
        scrollTrigger: {
          trigger: '#model-canvas', // The canvas container
          start: 'top 50vw', // Start the scaling when the top of the canvas hits 50% of the viewport width
          end: 'bottom 40vh', // End the scaling when the bottom of the canvas hits 50% of the viewport width
          scrub: true,  // Smooth scrubbing based on the scroll position
        }
      });
    }, []);

    return (
      <group ref={groupRef} {...props} dispose={null}>
      <group position={[0, 5, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Steel}
        />
      </group>
      </group>
    )
  }

export default function SteelSheet() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            style={{ zIndex: -1 }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight position={[2, 2, 5]} intensity={5} />
            <directionalLight position={[0, 0, -1]} intensity={5} />
            <directionalLight position={[0, 0, 1]} intensity={5} />
            <directionalLight position={[-1, -1, -2]} intensity={5} />
            <directionalLight position={[-1, -1, 2]} intensity={5} />
            <directionalLight position={[-1, 2, 0]} intensity={5} />
            <directionalLight position={[1, -2, 0]} intensity={5} />
            <directionalLight position={[1, 2, 0]} intensity={5} />
            <directionalLight position={[1, -1, -2]} intensity={5} />
            <directionalLight position={[1, -1, 2]} intensity={5} />
            <directionalLight position={[2, 2, 5]} intensity={5} />
            <directionalLight position={[0, 0, -1]} intensity={5} />
            <directionalLight position={[1, 1, 1]} intensity={5} />
            <directionalLight position={[2, 2, 0]} intensity={5} />
            <directionalLight position={[-2, -2, 0]} intensity={5} />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate />
            <Model />
        </Canvas>
    );
}
