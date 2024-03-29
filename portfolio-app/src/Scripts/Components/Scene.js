import { useContext, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Vector3, Color } from 'three'

import { ThemeContext } from '../Contexts/ThemeContext';

import '../../Styles/Components/Background.css';

import DotWaves from './DotWaves'

const Scene = () => {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
    const [dotWavePosition, setDotWavePosition] = useState([0, 0, -50]);
    const [dotWaveColor, setDotWaveColor] = useState([new Color('#2ee7de'), new Color('#063970')]);

    const scrollSpeed = 25;
    const themeContext = useContext(ThemeContext);

    useFrame(() => {
        const targetPosition = new Vector3(0, -window.scrollY / window.innerHeight * scrollSpeed, 10);
        let position = new Vector3(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
        position.lerp(targetPosition, 0.05);

        setCameraPosition([position.x, position.y, position.z]);
        setDotWavePosition([dotWavePosition[0], position.y * 0.5, dotWavePosition[2]]);

        const colorIndex = themeContext.colorIndex;
        const newColors = themeContext.theme.colors[colorIndex];
        let colors = dotWaveColor;

        if (newColors[0] !== undefined || newColors[1] !== undefined) {
            colors[0].lerp(new Color(newColors[0]), 0.01);
            colors[1].lerp(new Color(newColors[1]), 0.01);
        }

        setDotWaveColor(colors);
    });

    return (
        <group>
            <DotWaves
                position={dotWavePosition}
                rotation={[0, 0, Math.PI / 6]}
                geometrySize={200}
                density={50}
                pointSize={1.5}
                colorA={dotWaveColor[0]}
                colorB={dotWaveColor[1]}
                amplitudeMin={-15}
                amplitudeMax={15}
                noiseResolution={5}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} near={0.1} far={250} fov={90} />

        </group>
    );
}

export default Scene;