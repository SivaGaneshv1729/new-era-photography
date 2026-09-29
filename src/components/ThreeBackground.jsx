import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={1.8}>
        <MeshDistortMaterial 
          color="#a855f7"
          emissive="#ec4899"
          emissiveIntensity={0.5}
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <AbstractShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
