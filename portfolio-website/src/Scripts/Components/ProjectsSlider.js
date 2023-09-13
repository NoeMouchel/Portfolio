import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../../Styles/Components/ProjectsSlider.css';

import ProjectViewer from './ProjectViewer';
import ArrowButton from './ArrowButton';
import { projects } from '../Datas/Projects.js';

const ProjectsSlider = () => {
    let buttonLocked = false;
    const defaultSlotWidth = 30;
    const mobileSlotWidth = 75;
    const sliderMargin = 0;
    const openedWidthVW = 90;

    const [activeIndex, setActiveIndex] = useState(0);
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [slotWidth, setSlotWidth] = useState(window.matchMedia("(max-width: 600px)").matches ? mobileSlotWidth : defaultSlotWidth);

    const handlers = useSwipeable({
        onSwipedLeft: () => showNextProject(),
        onSwipedRight: () => showPreviousProject(),
    });

    const mediaScreenHandler = (e) => {
        setSlotWidth(e.matches ? mobileSlotWidth : defaultSlotWidth)
    }

    useEffect(() => {
        window.matchMedia("(max-width: 600px)").addEventListener('change', mediaScreenHandler);
    })

    const unlockButton = () => {
        buttonLocked = false;
    }

    const areButtonsUnlocked = () => {
        if (!buttonLocked) {
            buttonLocked = true;
            setTimeout(unlockButton, 250);

            return true;
        }
        else {
            return false;
        }
    }

    const showPreviousProject = () => {

        if (!areButtonsUnlocked()) return;

        let i = activeIndex - 1 < 0 ? projects.length - 1 : activeIndex - 1;
        setActiveIndex(i);

        //  If the viewer is opened then set the new current viewer opened
        if (openedIndex !== -1) {
            setOpenedIndex(i);
        }
    }

    const showNextProject = () => {
        if (!areButtonsUnlocked()) return;

        let i = activeIndex + 1 >= projects.length ? 0 : activeIndex + 1;
        setActiveIndex(i);

        //  If the viewer is opened then set the new current viewer opened
        if (openedIndex !== -1) {
            setOpenedIndex(i);
        }
    }


    const selectCurrentProject = (i) => {
        if (!areButtonsUnlocked()) return;

        if (activeIndex !== i) {
            setActiveIndex(i);

            //  If the viewer is opened then set the new current viewer opened
            if (openedIndex !== -1) {
                setOpenedIndex(i);
            }
        }

        //  The viewer is already the current one, if the viewer is not opened or another viewer, 
        //  open this viewer
        else if (openedIndex !== i) {
            setOpenedIndex(i);
        }

        //  The viewer is already opened, it means if the user clicked it must close
        else {
            setOpenedIndex(-1);
        }
    }

    const computeListStyle = () => {
        const slideTotalWidth = slotWidth + 2 * sliderMargin;

        const containerSize =
            (projects.length - (openedIndex > -1 ? 1 : 0)) * slotWidth +
            (openedIndex > -1 ? openedWidthVW : 0);

        let x = activeIndex * slideTotalWidth;
        return {
            transform: `translateX(-${x}vw)`,
            left: `calc(50% - ${(openedIndex > -1 ? openedWidthVW : slideTotalWidth) / 2}vw)`,
            width: `${containerSize}vw`,
        };
    }

    const computeClosedSlotStyle = () => {
        return {
            width: `${slotWidth}vw`,
            margin: `0 ${sliderMargin}vw`,
        };
    }

    let dynamicListStyle = computeListStyle();
    let dynamicSlottStyle = computeClosedSlotStyle();

    return (
        <div className='project-slider' {...handlers}>
            <ul className='project-list' style={dynamicListStyle}>
                {
                    projects.map((data, i) => {
                        let divClass = 'project-slot ';
                        let slotStyle = dynamicSlottStyle;
                        if (activeIndex === i) {
                            divClass += 'active ';
                            if (openedIndex === i) {
                                divClass += 'opened ';

                                //  Dump slot style which will be replaced by the opened style
                                slotStyle = {}
                            }
                        }

                        return <li
                            key={i}
                            className={divClass}
                            style={slotStyle}
                            onClick={() => { selectCurrentProject(i) }}>
                            <ProjectViewer data={data} opened={openedIndex === i} />
                        </li>
                    })
                }
            </ul>

            <ArrowButton
                direction={-1}
                onClickHandle={showPreviousProject}
            />

            <ArrowButton
                direction={1}
                onClickHandle={showNextProject}
            />
        </div>
    );
}

export default ProjectsSlider;