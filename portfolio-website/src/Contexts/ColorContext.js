import { createContext, useEffect, useState } from 'react';
import { AddRootStyle } from '../Scripts/AddStyle';
import { colorSets } from '../Scripts/Datas/Colors';

export const ColorContext = createContext();

export function ColorContextProvider(props) {
    const [colors, setColors] = useState({ colors: colorSets[0] });

    useEffect(() => {
        if (colors[0] !== undefined) {
            AddRootStyle(`--jewerely-color: ${colors[0]}`)
        }
    }, [colors]);

    return (
        <ColorContext.Provider value={{ colors, setColors }}>
            {props.children}
        </ColorContext.Provider>
    );
}
