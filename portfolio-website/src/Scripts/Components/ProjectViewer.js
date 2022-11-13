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
        let openedClass = this.props.opened ? 'Opened ' : '';
        return (
            <div className = {'Project-viewer ' + openedClass}>
                <h2 className={'Project-title ' + openedClass}>{this.props.name}</h2>
                <div className={'Project-image-container ' + openedClass}>
                    <img src={this.props.cover} alt='Cover' draggable='false'/>
                </div>

                <div className="Description">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
