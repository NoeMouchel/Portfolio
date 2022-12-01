import { Component, Children, cloneElement } from 'react';
import '../../Styles/ProjectsSlider.css';
import ProjectViewer from './ProjectViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ProjectsSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {activeIndex: 0, openedIndex: -1}
    }
    
    oldIndex = 2;
    projectCount = 0;
    buttonLocked = false;

    unlockButton = () => {
        this.buttonLocked = false;
    }

    areButtonsUnlocked() 
    {
        if(!this.buttonLocked)
        {
            this.buttonLocked = true;
            setTimeout(this.unlockButton, 250);

            return true;
        }
        else
        {
            return false;
        }
    }

    showPreviousProject = () => {

        if(!this.areButtonsUnlocked()) return;
        let i = this.state.activeIndex - 1;
    
        if(i < 0) 
        {
          i = this.props.children.length - 1;
        }
        
        this.setState({activeIndex : i});
        
        if(this.state.openedIndex !== -1) {
            this.setState({openedIndex : i});
        }
    }
    
    showNextProject = () => 
    {

        if(!this.areButtonsUnlocked()) return;
    
        let i = this.state.activeIndex + 1;
    
        if(i >= this.props.children.length) {
          i = 0;
        }
        
        this.setState({activeIndex : i});
        
        if(this.state.openedIndex !== -1) {
            this.setState({openedIndex : i});
        }
    }


    selectCurrentProject = (currentIndex) => 
    {
        if(!this.areButtonsUnlocked()) return;

        if(this.state.activeIndex !== currentIndex)
        {
            this.setState({activeIndex : currentIndex});

            if(this.state.openedIndex !== -1) {
                this.setState({openedIndex : currentIndex});
            }
            return;
        }
        if (this.state.openedIndex !== currentIndex)
        {
             this.setState({openedIndex : currentIndex});
             return;
        }

        this.setState({openedIndex : -1});
    }

    render()
    {
        const widthVW = 30;
        const openedWidthVW = 90;
        const slideMargin = 0;

        let slideTotalWidth = widthVW + 2 * slideMargin;

        let containerSize = this.props.children.length*widthVW;
        if(this.state.openedIndex > -1)
        {
            containerSize = (this.props.children.length - 1) * widthVW + openedWidthVW;
        }
        
        const dynamicListStyle = 
        {
            'transform': `translateX(-${(this.state.activeIndex * slideTotalWidth)}vw)`,
            'left': `calc(50% - ${(this.state.openedIndex > -1 ? openedWidthVW/2 : slideTotalWidth/2)}vw)`,
            'width': `${(containerSize)}vw`
        }
        const dynamicElementStyle = 
        {
            'width': `${widthVW}vw`,
            'margin': `0 ${slideMargin}vw`
        }

        return (
            <div className='Project-slider'>

                <ul className='Project-list' style={dynamicListStyle}>
                {
                    Children.map(this.props.children, (el,i) => 
                    {

                        // Only Project viewer are accepted
                        if(el.type === ProjectViewer)
                        {                    
                            let divClass = 'Project-slot ';
                            let elementStyle = dynamicElementStyle;
                            if(this.state.activeIndex === i) {
                                divClass += 'Active ';
                                if(this.state.openedIndex === i) 
                                {
                                    divClass += 'Opened ';
                                    elementStyle = {}
                                }
                            } 
                            
                            return <li className= {divClass} key={i} style={elementStyle} onClick={() => {this.selectCurrentProject(i)}}> {cloneElement(el, {opened: this.state.openedIndex === i})} </li>
                        }

                        //  Nothing
                        return <></>
                    })
                }
                </ul>

                <div className='Arrow-btn' id='Previous-btn'>
                    <FontAwesomeIcon className='Icon' icon='chevron-left' onClick={this.showPreviousProject}/>
                </div>
                
                <div className='Arrow-btn' id='Next-btn'>
                    <FontAwesomeIcon className='Icon' icon='chevron-right' onClick={this.showNextProject}/>
                </div>
            </div>
        );
    }
}
