import { Component } from 'react';

import '../../Styles/Components/ImageOverlay.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ImageOverlay extends Component {

    render() {
        let imageOverlayContext = this.context;
        let shouldRender = imageOverlayContext.images !== undefined
        let image;

        if (shouldRender) {
            document.body.style.overflow = 'hidden';
            image = imageOverlayContext.images[imageOverlayContext.index];
        }
        else
            document.body.style.overflow = 'unset';


        return (
            (shouldRender) &&
            <div
                className='image-overlay'
                onClick={
                    (e) => {
                        imageOverlayContext.setImages(undefined);
                    }
                }>

                <img
                    src={`/Assets/ProjectsImages/${image}`}
                    alt='overlay'
                    onClick={(e) => e.stopPropagation()} />

                <div className='arrow-btn' id='previous-btn'>
                    <FontAwesomeIcon className='icon' icon='chevron-left' onClick={this.showPreviousProject} />
                </div>

                <div className='arrow-btn' id='next-btn'>
                    <FontAwesomeIcon className='icon' icon='chevron-right' onClick={this.showNextProject} />
                </div>

            </div >
        );

    }
}

ImageOverlay.contextType = ImageOverlayContext;

export default ImageOverlay;