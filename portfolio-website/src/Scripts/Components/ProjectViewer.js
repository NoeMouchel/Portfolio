import { Component } from 'react';
import '../../Styles/ProjectViewer.css';


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
            <div className = {'Project-viewer ' + (this.props.opened ? 'Opened ' : '')}>
                <h2>{this.props.name}</h2>
                <img className = {(this.props.opened ? 'Left ' : '')} src={this.props.cover} alt='Cover'/>

                <div className="Description">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
