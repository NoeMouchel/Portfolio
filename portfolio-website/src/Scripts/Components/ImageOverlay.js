import { Component } from 'react';
import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import '../../Styles/ImageOverlay.css';

class ImageOverlay extends Component {

    render() {
        let imageOverlayContext = this.context;
        let shouldRender = imageOverlayContext.image !== undefined

        if (shouldRender)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'unset';

        return (
            (shouldRender) &&
            <div
                className='image-overlay'
                onClick={
                    (e) => {
                        imageOverlayContext.setImage(undefined);
                    }
                }>

                <img src={imageOverlayContext.image} alt='overlay' onClick={(e) => e.stopPropagation()} />
            </div >
        );

    }
}

ImageOverlay.contextType = ImageOverlayContext;

export default ImageOverlay;