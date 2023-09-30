import { Canvas } from '@react-three/fiber'

import '../../Styles/Components/Background.css';

import Scene from './Scene';

const Background = () => (
    <div className='background'>
        <Canvas resize={false}>
            <Scene />
        </Canvas>
    </div>
);

export default Background;

