import { createContext, useState } from 'react';

export const ImageOverlayContext = createContext();

// TODO
// const overlayDatas = {
//     currentIndex: 0,
//     images: ['']
// }

export function ImageOverlayContextProvider(props) {
    const [image, setImage] = useState("NULL");

    return (
        <ImageOverlayContext.Provider value={{ image, setImage }}>
            {props.children}
        </ImageOverlayContext.Provider>
    );
}
