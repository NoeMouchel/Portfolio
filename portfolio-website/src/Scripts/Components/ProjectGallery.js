import { Component } from 'react';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';

import '../../Styles/Components/ProjectGallery.css';

export default class ProjectGallery extends Component {
    static contextType = ImageOverlayContext;

    render() {
        let imageOverlayContext = this.context;

        return (
            <div className='project-gallery' onClick={(e) => e.stopPropagation()}>
                <ul>
                    {
                        this.props.images.map((element, i) => {
                            return <li key={i}>
                                <img
                                    src={`/Assets/ProjectsImages/${element}`}
                                    alt='Project pics'
                                    draggable={false}
                                    onClick={(e) => {
                                        imageOverlayContext.setImages(this.props.images);
                                        imageOverlayContext.setIndex(i);
                                    }} />
                            </li>
                        })
                    }
                </ul>
            </div>

        );
    }
}