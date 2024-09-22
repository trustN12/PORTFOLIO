"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cat = React.memo(function Cat(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group
  {...props}
  dispose={null}
  ref={modelRef}
  position={[0, -0.1, 0]} // Centered horizontally
  scale={[0.008, 0.008, 0.008]} // Adjusted scale
  rotation={[0.30, 0.02, -0.04]} // Keep rotation as is
>

      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.eyes_LPSG}
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: 'Object_2' }}
      />
      <mesh
        name="Object_3"
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: 'Object_3' }}
      />
    </group>
  );
});

export default Cat;
useGLTF.preload("/models/scene-transformed.glb");
