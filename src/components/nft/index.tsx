import React, { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mesh() {
    const gltf = useLoader(GLTFLoader, '/waterDrop.glb')
    console.log(gltf)
    const myMesh = React.useRef(null)

    useFrame(({ clock }) => {
        myMesh.current.rotation.y = clock.getElapsedTime() / 2
    })

    return (
        <Suspense fallback={<div>loading...</div> /* or null */}>
            <primitive
                ref={myMesh}
                object={gltf.scene}
                position={[0, -1.7, 0]}
            />
            <meshStandardMaterial color="hotpink" transparent />
        </Suspense>
    )
}

const Nft: React.FC = () => {
    return (
        <div style={{ width: '50vw', height: '60vh' }}>
            <Canvas camera={{ position: [0, 0, 3] }}>
                <OrbitControls />
                <directionalLight color="" intensity={4} position={[4, 2, 10]} />
                <spotLight position={[2, 2, -6] } intensity={2} angle={0.9} />
                <Mesh />
            </Canvas>
        </div>
    )
}

export default Nft
