import { Component } from 'react';
import '../Styles/ProjectsSlider.css';
import leftArrow from '../Assets/arrow-left.png';
import rightArrow from '../Assets/arrow-right.png';
import ProjectViewer from '../Components/ProjectViewer';

export default class ProjectsSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {activeIndex: 0, direction:0}
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
        setTimeout(this.unlockButton, 500);

        return true;
        }
        else
        {
        return false;
        }
    }

    showPreviousProject = () => {

        if(!this.areButtonsUnlocked()) return;
    
        this.oldIndex = this.state.activeIndex;
        let i = this.state.activeIndex - 1;
    
        if(i < 0) {
          i = this.props.children.length - 1;
        }
        
        this.setState({direction:1});
        this.setState({activeIndex : i});
      }
    
      showNextProject = () => {
        
        if(!this.areButtonsUnlocked()) return;
    
        this.oldIndex = this.state.activeIndex;
        let i = this.state.activeIndex + 1;
    
        if(i >= this.props.children.length) {
          i = 0;
        }
        
        this.setState({direction:0});
        this.setState({activeIndex : i});
      }

    render()
    {
        return (
            <div className="Project-slider">

                {this.props.children.map((el,i) => {

                    //  Only Project viewer are accepted
                    if(el.type === ProjectViewer)
                    {                        
                        let divClass = 'Project-slot ';
                        
                        if(this.state.activeIndex === i)      divClass += 'active ';

                        if(this.oldIndex === i) {
                            if (this.state.direction <= 0)    divClass += 'right ';
                            else if(this.state.direction > 0) divClass += 'left ';
                        }
                        else {
                            if (this.state.direction <= 0)    divClass += 'left ';
                            else if(this.state.direction > 0) divClass += 'right ';
                        }

                        return <div className= {divClass} key={i}> {el} </div>
                    }

                    //  Nothing
                    return <></>
                })}
                
                <div className='arrow-btn' id='previous-btn' onClick={this.showPreviousProject}>
                    <img src={leftArrow} draggable={false} alt='arrowLeft'/>
                </div>
                
                <div className='arrow-btn' id='next-btn'onClick={this.showNextProject}>
                    <img src={rightArrow} draggable={false} alt='arrowRight'/>
                </div>
            </div>
        );
    }
}
