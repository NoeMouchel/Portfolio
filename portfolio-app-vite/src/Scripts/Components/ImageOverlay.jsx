import { useContext, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

import '../../styles/components/ImageOverlay.css';

import { ImageOverlayContext } from '../contexts/ImageOverlayContext.jsx';
import ArrowButton from './ArrowButton.jsx';
import { AddRootStyle } from '../AddStyle.jsx';

const ImageOverlay = () => {

    const imageOverlayContext = useContext(ImageOverlayContext);
    let shouldRender = imageOverlayContext.images !== undefined
    let image;
    const scrollBarCompensation = useRef(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextImage(),
        onSwipedRight: () => previousImage(),
    });


    if (shouldRender) {
        document.body.style.overflow = 'hidden';
        AddRootStyle(`--scroll-bar-compensation: ${scrollBarCompensation.current}px`)

        image = imageOverlayContext.images[imageOverlayContext.index];
    }
    else {
        document.body.style.overflow = 'unset';
        AddRootStyle('--scroll-bar-compensation: 0px');
    }


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

    useEffect(() => {
        scrollBarCompensation.current = window.innerWidth - document.body.offsetWidth;
    }, [scrollBarCompensation])



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
                src={`${import.meta.env.BASE_URL}assets/projects-images/${image}`}
                alt='overlay'
                draggable={false}
                onClick={(e) => e.stopPropagation()}
            />


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