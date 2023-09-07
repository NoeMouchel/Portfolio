import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Styles/Components/ImageOverlay.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';

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
                    draggable={false}
                    onClick={(e) => e.stopPropagation()} />

                <div className='arrow-btn' id='previous-btn' onClick={(e) => {
                    e.stopPropagation();
                    imageOverlayContext.setIndex(imageOverlayContext.index - 1 < 0 ? imageOverlayContext.images.length - 1 : imageOverlayContext.index - 1)
                }}>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faChevronLeft}
                    />
                </div>

                <div className='arrow-btn' id='next-btn' onClick={(e) => {
                    e.stopPropagation();
                    imageOverlayContext.setIndex(imageOverlayContext.index + 1 >= imageOverlayContext.images.length ? 0 : imageOverlayContext.index + 1)
                }}>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faChevronRight}
                    />
                </div>

            </div >
        );

    }
}

ImageOverlay.contextType = ImageOverlayContext;

export default ImageOverlay;