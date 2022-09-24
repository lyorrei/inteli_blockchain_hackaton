import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from "react-three-fiber";

const  Nft: React.FC  = () => {
    // textures from the imported image
    const texture = useLoader(THREE.TextureLoader, img)
    const texture1 = useLoader(THREE.TextureLoader, img1)
    const texture2 = useLoader(THREE.TextureLoader, img2)
    const group = useRef();
    // loading the table.gtlf file being imported into the component.
    const { nodes } = useLoader(GLTFLoader, table);
    // useFrame will run outside of react in animation frames to optimize updates.
    useFrame(() => {
      group.current.rotation.x = 5.09;
    });
    return (
      // Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
      <group ref={group} position={[-12, -20, -10]} >
        <mesh visible geometry={nodes.mesh_1.geometry}>
        <meshPhongMaterial attach="material" color="gold" map={texture} map={texture1} map={texture2}/>
        </mesh>
        <mesh visible geometry={nodes.mesh_0.geometry}>
        <meshPhongMaterial attach="material" color="#795C34" map={texture} map={texture1} map={texture2}/>
        </mesh>
      </group>
    );
  }

  export default Nft
