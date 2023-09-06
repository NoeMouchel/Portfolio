import { Component } from 'react';
import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import '../../Styles/ProjectGallery.css';

export default class ProjectGallery extends Component {
    static contextType = ImageOverlayContext;

    render() {
        let imageOverlayContext = this.context;
        return (
            <div className='project-gallery' onClick={(e) => e.stopPropagation()}>
                <ul>
                    {
                        this.props.images.map((element, i) => {
                            let path = `/Assets/ProjectsImages/${element}`;
                            return <li key={i}>
                                <img
                                    src={path}
                                    alt='Project pics'
                                    draggable={false}
                                    onClick={(e) => { imageOverlayContext.setImage(path) }} />
                            </li>
                        })
                    }
                </ul>
            </div>

        );
    }
}