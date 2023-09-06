import { createContext, useState, useEffect } from 'react';

import { useTheme } from './ThemeContext';

export const SectionObserverContext = createContext();

export function SectionObserverContextProvider(props) {
    const [sectionIndex, setSectionIndex] = useState(0);
    const { setColorIndex } = useTheme();

    //  Use theme context hook so the theme is updated when the section index is updated
    useEffect(() => {
        setColorIndex(sectionIndex);
    }, [sectionIndex]);

    return (
        <SectionObserverContext.Provider value={{ sectionIndex, setSectionIndex }}>
            {props.children}
        </SectionObserverContext.Provider>
    );
}
