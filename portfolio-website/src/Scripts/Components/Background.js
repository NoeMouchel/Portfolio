import { Component } from 'react';
import { Canvas } from '@react-three/fiber'
import Scene from './Scene';
import '../../Styles/Background.css';

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
