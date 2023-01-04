import { Component } from 'react';
import LogoViewer from './LogoViewer';
import '../../Styles/About.css';


export default class About extends Component {

    render()
    {
        return (
            <div className = 'About'>
                <div className = 'About-Description'>
                    {this.props.children}
                </div>
                

                <LogoViewer/>
            </div>
        );
    }
}
