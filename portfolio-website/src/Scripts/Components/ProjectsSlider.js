import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../../Styles/Components/ProjectsSlider.css';

import ProjectViewer from './ProjectViewer';
import { projects } from '../Datas/Projects.js';

export default class ProjectsSlider extends Component {

    oldIndex = 2;
    projectCount = 0;
    buttonLocked = false;

    defaultSlotWidth = 30;
    mobileSlotWidth = 75;

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            openedIndex: -1,
            slotWidth: window.matchMedia("(max-width: 600px)").matches ? this.mobileSlotWidth : this.defaultSlotWidth
        }
    }

    componentDidMount() {
        window.matchMedia("(max-width: 600px)").addEventListener('change', this.mediaScreenHandler);
    }

    mediaScreenHandler = (e) => {
        this.setState({ slotWidth: e.matches ? this.mobileSlotWidth : this.defaultSlotWidth });
    }

    unlockButton = () => {
        this.buttonLocked = false;
    }

    areButtonsUnlocked() {
        if (!this.buttonLocked) {
            this.buttonLocked = true;
            setTimeout(this.unlockButton, 250);

            return true;
        }
        else {
            return false;
        }
    }

    showPreviousProject = () => {

        if (!this.areButtonsUnlocked()) return;

        let i = this.state.activeIndex - 1 < 0 ? projects.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: i });

        //  If the viewer is opened then set the new current viewer opened
        if (this.state.openedIndex !== -1) {
            this.setState({ openedIndex: i });
        }
    }

    showNextProject = () => {
        if (!this.areButtonsUnlocked()) return;

        let i = this.state.activeIndex + 1 >= projects.length ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: i });

        //  If the viewer is opened then set the new current viewer opened
        if (this.state.openedIndex !== -1) {
            this.setState({ openedIndex: i });
        }
    }


    selectCurrentProject = (currentIndex) => {
        if (!this.areButtonsUnlocked()) return;

        if (this.state.activeIndex !== currentIndex) {
            this.setState({ activeIndex: currentIndex });

            //  If the viewer is opened then set the new current viewer opened
            if (this.state.openedIndex !== -1) {
                this.setState({ openedIndex: currentIndex });
            }
        }

        //  The viewer is already the current one, if the viewer is not opened or another viewer, 
        //  open this viewer
        else if (this.state.openedIndex !== currentIndex) {
            this.setState({ openedIndex: currentIndex });
        }

        //  The viewer is already opened, it means if the user clicked it must close
        else {
            this.setState({ openedIndex: -1 });
        }
    }

    render() {
        const widthVW = this.state.slotWidth;
        const openedWidthVW = 90;
        const slideMargin = 0;

        const slideTotalWidth = widthVW + 2 * slideMargin;
        const openedIndex = this.state.openedIndex;

        const containerSize =
            (projects.length - (openedIndex > -1 ? 1 : 0)) * widthVW +
            (openedIndex > -1 ? openedWidthVW : 0);

        let x = this.state.activeIndex * slideTotalWidth;
        const dynamicListStyle = {
            transform: `translateX(-${x}vw)`,
            left: `calc(50% - ${(openedIndex > -1 ? openedWidthVW : slideTotalWidth) / 2}vw)`,
            width: `${containerSize}vw`,
        };

        const dynamicElementStyle = {
            width: `${widthVW}vw`,
            margin: `0 ${slideMargin}vw`,
        };

        return (
            <div className='project-slider'>

                <ul className='project-list' style={dynamicListStyle}>
                    {
                        projects.map((data, i) => {
                            let divClass = 'project-slot ';
                            let elementStyle = dynamicElementStyle;
                            if (this.state.activeIndex === i) {
                                divClass += 'active ';
                                if (this.state.openedIndex === i) {
                                    divClass += 'opened ';
                                    elementStyle = {}
                                }
                            }

                            return <li
                                key={i}
                                className={divClass}
                                style={elementStyle}
                                onClick={() => { this.selectCurrentProject(i) }}>
                                <ProjectViewer data={data} opened={this.state.openedIndex === i} />
                            </li>
                        })
                    }
                </ul>

                <div className='arrow-btn' id='previous-btn'>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faChevronLeft}
                        onClick={this.showPreviousProject}
                    />
                </div>

                <div className='arrow-btn' id='next-btn'>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faChevronRight}
                        onClick={this.showNextProject}
                    />
                </div>
            </div>
        );
    }
}
