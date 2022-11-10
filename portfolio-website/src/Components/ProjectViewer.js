import { Component } from 'react';
import '../Styles/ProjectViewer.css';

export default class ProjectViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {direction: 0, isActive:false}
    }

    setSide = (dir) => {
        this.setState({direction: dir});
    }

    setActive = (active) => {
        this.setState({isActive: active});
    }

    render()
    {
        return (
            <div className = 'Project-viewer'>

                <h2>{this.props.name}</h2>
                
                {this.props.children}
            </div>
        );
    }
}
