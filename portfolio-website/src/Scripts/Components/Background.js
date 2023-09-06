import { Component } from 'react';
import { Canvas } from '@react-three/fiber'

import '../../Styles/Components/Background.css';

import Scene from './Scene';

export default class Background extends Component {

    render() {
        return (
            <div className='background'>
                <Canvas>
                    <Scene />
                </Canvas>
            </div>);
    }
}
