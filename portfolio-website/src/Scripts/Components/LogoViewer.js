import { Component } from 'react';
import '../../Styles/LogoViewer.css';
import { tools } from '../Datas/Tools.js';

export default class LogoViewer extends Component {
    constructor(props) {
        super(props)
        this.state = { logo1: 0, logo2: 1, logo3: 2, logo4: 3 }
    }

    render() {
        return (
            <div className='Logo-viewer'>
                <ul>
                    {
                        tools.map((element, i) => {
                            return (<li key={i}>
                                <img
                                    className='Logo'
                                    src={element.logo}
                                    data-weight={element.weight}
                                    alt='Logo'
                                    draggable='false'
                                />
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
