import { Component } from 'react';
import '../../Styles/ProjectDescription.css';


export default class ProjectDescription extends Component {

    render()
    {        
        return (
            <div className = 'Project-Description '>
                {this.props.children}
            </div>
        );
    }
}