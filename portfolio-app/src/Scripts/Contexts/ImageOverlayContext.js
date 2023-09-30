import { createContext, useState } from 'react';

export const ImageOverlayContext = createContext();

export const ImageOverlayContextProvider = (props) => {
    const [images, setImages] = useState(undefined);
    const [index, setIndex] = useState(0);

    return (
        <ImageOverlayContext.Provider value={{ images, setImages, index, setIndex }}>
            {props.children}
        </ImageOverlayContext.Provider>
    );
}