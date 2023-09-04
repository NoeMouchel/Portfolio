import { createContext, useEffect, useState } from 'react';
import { AddRootStyle } from '../AddStyle';
import { colorSets } from '../Datas/Colors';

export const ColorContext = createContext();

export function ColorContextProvider(props) {
    const [colors, setColors] = useState(colorSets["blue"]);

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
