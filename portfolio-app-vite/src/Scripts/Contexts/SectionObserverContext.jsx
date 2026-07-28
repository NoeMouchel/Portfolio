import { createContext, useState, useEffect } from 'react';

import { useTheme } from './ThemeContext';

export const SectionObserverContext = createContext();

export const SectionObserverContextProvider = (props) => {
    const [sectionIndexes, setSectionIndexes] = useState([-1]);
    const { setColorIndex } = useTheme();

    const addIndex = (id) => {
        setSectionIndexes(current => {
            if (current.indexOf(id) === -1)
                return [...current, id];
            return current;
        });
    };

    const removeIndex = (id) => {
        setSectionIndexes(current => current.filter(i => id !== i));
    };

    //  Use theme context hook so the theme is updated when the section index is updated
    useEffect(() => {
        let index = sectionIndexes[sectionIndexes.length - 1];
        if (index !== undefined && index > -1)
            setColorIndex(index);
    }, [sectionIndexes, setColorIndex]);

    return (
        <SectionObserverContext.Provider value={
            {
                sectionIndex: sectionIndexes[sectionIndexes.length - 1],
                addSectionIndex: addIndex,
                removeSectionIndex: removeIndex
            }}>
            {props.children}
        </SectionObserverContext.Provider>
    );
}
