import { useContext, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Vector3, Color } from 'three'

import { ThemeContext } from '../Contexts/ThemeContext';

import '../../Styles/Components/Background.css';

import { DotWaves } from './DotWaves'

export default function Scene() {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
    const [dotWavePosition, setDotWavePosition] = useState([0, 0, -50]);
    const [dotWaveColor, setDotWaveColor] = useState([new Color('#2ee7de'), new Color('#063970')]);

    const scrollSpeed = 25;
    const themeContext = useContext(ThemeContext);

    useFrame(() => {
        let vec = new Vector3(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
        let vecTo = new Vector3(0, -window.scrollY / window.innerHeight * scrollSpeed, 10);

        vec.lerp(vecTo, 0.05);

        setCameraPosition([vec.x, vec.y, vec.z]);
        setDotWavePosition([dotWavePosition[0], vec.y * 0.5, dotWavePosition[2]])

        let colorIndex = themeContext.colorIndex;
        let colors = dotWaveColor;

        let color0 = themeContext.theme.colors[colorIndex][0];
        let color1 = themeContext.theme.colors[colorIndex][1];

        if (color0 !== undefined || color1 !== undefined) {
            colors[0].lerp(new Color(color0), 0.01);
            colors[1].lerp(new Color(color1), 0.01);
        }

        setDotWaveColor(colors);
    });

    return (
        <group>
            <DotWaves
                position={dotWavePosition}
                rotation={[0, 0, Math.PI / 6]}
                geometrySize={300}
                density={75}
                pointSize={1.5}
                colorA={dotWaveColor[0]}
                colorB={dotWaveColor[1]}
                amplitudeMin={-15}
                amplitudeMax={15}
                noiseResolution={5}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} near={0.1} far={250} fov={90} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />

        </group>
    );
}