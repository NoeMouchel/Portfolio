import { useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Vector3, Color } from 'three'
import { DotWaves } from './DotWaves'
import '../../Styles/Background.css';

import {SCROLL_ACCEPTANCE_OFFSET} from '../Constants';

export default function Scene() {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
    const [dotWavePosition, setDotWavePosition] = useState([0, 0, 0]);
    const [dotWaveColor, setDotWaveColor] = useState([new Color('#2ee7de'),new Color('#063970')]);

    const scrollSpeed = 10;
    
    const colorTop = [new Color('#2ee7de'),new Color('#0a768f')];
    const colorMid = [new Color('#640bd0'),new Color('#c73895')];
    const colorBot = [new Color('#f19c3b'),new Color('#fffb17')];

    useFrame(() => {
        let vec = new Vector3(cameraPosition[0],cameraPosition[1],cameraPosition[2]);
        let vecTo  = new Vector3(0, -window.scrollY/window.innerHeight * scrollSpeed, 10);
        
        vec.lerp(vecTo, 0.05);

        setCameraPosition([vec.x, vec.y, vec.z]);
        setDotWavePosition([vec.x, vec.y*0.5, vec.z])
        
        let  colors   = dotWaveColor;
        let colorTo   = window.innerHeight*2 - SCROLL_ACCEPTANCE_OFFSET <= window.scrollY ? colorBot : 
                        window.innerHeight   - SCROLL_ACCEPTANCE_OFFSET <= window.scrollY ? colorMid :
                        colorTop;

        colors[0].lerp(colorTo[0], 0.01);
        colors[1].lerp(colorTo[1], 0.01);

        setDotWaveColor(colors);
    });

    return (
        <group>
            <DotWaves 
            position={dotWavePosition} 
            rotation={[0, 0, Math.PI/6]} 
            geometrySize= {200} 
            density={50}
            pointSize={2}
            colorA={dotWaveColor[0]}
            colorB={dotWaveColor[1]}
            noiseResolution={25}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} near={0.1} far={250} fov={90}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            
        </group>
    );
}
