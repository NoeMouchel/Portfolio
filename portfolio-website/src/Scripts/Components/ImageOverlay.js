import { useContext } from 'react';
import { useSwipeable } from 'react-swipeable';

import '../../Styles/Components/ImageOverlay.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import ArrowButton from './ArrowButton';

const ImageOverlay = () => {

    const imageOverlayContext = useContext(ImageOverlayContext);
    let shouldRender = imageOverlayContext.images !== undefined
    let image;

    const handlers = useSwipeable({
        onSwipedLeft: () => nextImage(),
        onSwipedRight: () => previousImage(),
    });

    if (shouldRender) {
        document.body.style.overflow = 'hidden';
        image = imageOverlayContext.images[imageOverlayContext.index];
    }
    else
        document.body.style.overflow = 'unset';


    const nextImage = () => imageOverlayContext.setIndex(
        imageOverlayContext.index + 1 >= imageOverlayContext.images.length ?
            0 :
            imageOverlayContext.index + 1
    );

    const previousImage = () => imageOverlayContext.setIndex(
        imageOverlayContext.index - 1 < 0 ?
            imageOverlayContext.images.length - 1 :
            imageOverlayContext.index - 1
    );


    return (
        (shouldRender) &&
        <div
            className='image-overlay'
            {...handlers}
            onClick={
                (e) => {
                    imageOverlayContext.setImages(undefined);
                }
            }
        >

            <img
                src={`/Assets/ProjectsImages/${image}`}
                alt='overlay'
                draggable={false}
                onClick={(e) => e.stopPropagation()} />

            <ArrowButton
                direction={-1}
                onClickHandle={(e) => { previousImage() }}
            />

            <ArrowButton
                direction={1}
                onClickHandle={(e) => { nextImage() }}
            />
        </div >
    );
}

export default ImageOverlay;