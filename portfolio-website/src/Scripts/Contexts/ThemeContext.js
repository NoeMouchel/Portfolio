import { createContext, useEffect, useState } from 'react';
import { AddRootStyle } from '../AddStyle';
import { Themes } from '../Datas/Themes';

export const ThemeContext = createContext();



export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(Themes.dark);
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        if (theme.colors[colorIndex][0] !== undefined) {
            AddRootStyle(`--jewerely-color: ${theme.colors[colorIndex][0]}`)
        }
    }, [theme, colorIndex]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, colorIndex, setColorIndex }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
