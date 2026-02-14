import React, { useEffect, useRef, useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
const Sphere = () => {

    const sphereRef = useRef();
    const [radius, setRadius] = useState(3); // default radius

    // Rotate sphere
    useFrame((state, delta) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += delta * 0.1;
        }
    })

    // Mimic media queries
    const updateRadius = () => {
        const width = window.innerWidth;

        if (width < 600) {           // small screens
            setRadius(4);
        } else if (width < 1200) {   // medium screens
            setRadius(5);
        } else {                     // large screens
            setRadius(4.8);
        }
    }

    // Run on mount and on resize
    useEffect(() => {
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [])

    return (
        <>
            <ambientLight intensity={10} />
            <directionalLight position={[3, 3, 3]} intensity={1.2} />
            <pointLight position={[-3, -3, 3]} intensity={1} color="#1b2c7a" />

            <OrbitControls
                enableRotate={true}
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}   // lock vertical rotation
                maxPolarAngle={Math.PI / 2}   // lock vertical rotation
            />

            <mesh ref={sphereRef} position={[0, -3.6, 0]}>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshStandardMaterial
                    color="#ff5705"
                    roughness={0.15}
                    metalness={0.75}
                    emissiveIntensity={0.6}
                    wireframe
                    flatShading
                />
            </mesh>


            <EffectComposer>
                <Bloom
                    intensity={1.2}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                />
            </EffectComposer>
        </>
    )
}

export default Sphere
