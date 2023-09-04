import { Component } from 'react';
import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import '../../Styles/ImageOverlay.css';

class ImageOverlay extends Component {

    render() {
        let imageOverlayContext = this.context;

        return (
            (imageOverlayContext.image !== 'NULL') &&
            <div
                className='Image-overlay'
                onClick={
                    (e) => {
                        imageOverlayContext.setImage('NULL');
                    }
                }>

                <img src={imageOverlayContext.image} alt='overlay' onClick={(e) => e.stopPropagation()} />
            </div >
        );

    }
}

ImageOverlay.contextType = ImageOverlayContext;

export default ImageOverlay;