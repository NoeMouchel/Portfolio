import { useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Vector3 } from 'three'
import '../Styles/Background.css';

export default function Scene() {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
    const scrollSpeed = 10;
    
    useFrame(() => {
        let vec = new Vector3(cameraPosition[0],cameraPosition[1],cameraPosition[2]);
        let to  = new Vector3(0, window.scrollY/window.innerHeight * scrollSpeed, 10);
        
        vec.lerp(to, 0.1);

        console.log(vec);
        setCameraPosition([vec.x, vec.y, vec.z]);
    });

    const aspect = window.innerWidth / window.innerHeight;
    console.log(aspect);
    return (
        <group>
            <PerspectiveCamera makeDefault position={cameraPosition} near={0.1} far={250} fov={90} onUpdate={(c) => c.updateProjectionMatrix()}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>

            <mesh rotation={[90,0,20]} position={[0,10, 0]}>
                <boxBufferGeometry attach='geometry' args={[3,1000,3]}/>
                <meshLambertMaterial attach='material' color='#516C70'/>
            </mesh>

            <mesh rotation={[-90,0,20]} position={[0,0, 0]}>
                <boxBufferGeometry attach='geometry' args={[1,1000,1]}/>
                <meshLambertMaterial attach='material' color='#705151'/>
            </mesh>
        </group>
    );
}
