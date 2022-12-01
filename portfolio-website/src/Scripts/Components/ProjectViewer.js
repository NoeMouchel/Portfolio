import { Component, Children, cloneElement } from 'react';
import '../../Styles/ProjectViewer.css';
import ProjectDescription from './ProjectDescription';


export default class ProjectViewer extends Component {
    constructor(props) {
        super(props)
        this.state = {currentDescPage: 0}
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
                    {
                        Children.map(this.props.children, (el, i) => 
                        {

                            // Only Project viewer are accepted
                            if(el.type === ProjectDescription)
                            {                    
                                if(this.state.currentDescPage === i) {
                                    return <div> {cloneElement(el)} </div>
                                } 
                                
                                // return <div> {cloneElement(el)} </div>
                            }

                            //  Nothing
                            return <></>
                        })
                    }
                    {/* {this.props.children} */}
                </div>
            </div>
        );
    }
}
