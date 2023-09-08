import { useContext } from 'react';

import '../../Styles/Components/ImageOverlay.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import ArrowButton from './ArrowButton';

const ImageOverlay = () => {
    let imageOverlayContext = useContext(ImageOverlayContext);
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

            <ArrowButton
                direction={-1}
                onClickHandle={(e) => {
                    imageOverlayContext.setIndex(imageOverlayContext.index - 1 < 0 ? imageOverlayContext.images.length - 1 : imageOverlayContext.index - 1)
                }}
            />

            <ArrowButton
                direction={1}
                onClickHandle={(e) => {
                    imageOverlayContext.setIndex(imageOverlayContext.index + 1 >= imageOverlayContext.images.length ? 0 : imageOverlayContext.index + 1)
                }}
            />
        </div >
    );
}

export default ImageOverlay;