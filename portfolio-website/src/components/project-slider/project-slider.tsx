import { Component, State, Element, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'project-slider',
  styleUrl: 'project-slider.css',
  shadow: true,
  assetsDirs: ['../assets'],
})

export class ProjectSlider {

  @Element() element: HTMLElement;

  @State() index : number = 0;

  private slideCount : number = 0;
  private slides : NodeList;
  private oldIndex : number;

  private buttonLocked : boolean = false;
  private currentProject;

	componentWillLoad() {
		this.slides = this.element.querySelectorAll('project-component');
		this.slideCount = this.slides.length;
    this.currentProject = this.slides[this.index] as HTMLProjectComponentElement;
	}

	componentDidUpdate() {
    let oldProject = this.slides[this.oldIndex] as HTMLProjectComponentElement;
    oldProject.setActive(false);

    this.currentProject = this.slides[this.index] as HTMLProjectComponentElement;
    this.currentProject.setActive(true);    
	}

  unlockButton = () => {
    this.buttonLocked = false;
  }

  areButtonsUnlocked() : boolean 
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

    this.oldIndex = this.index;
    let i = this.index - 1;

    if(i < 0) {
      i = this.slideCount - 1;
    }
    
    //  Force move all elements to the right
    this.slides.forEach(n => {
      let nexts = n as HTMLProjectComponentElement;
      nexts.setSide(1);
    })

    //  Force move the next selected elements to the left
    let old = this.slides[this.oldIndex] as HTMLProjectComponentElement;
    old.setSide(-1);

    this.index = i;
  }

  showNextProject = () => {
    
    if(!this.areButtonsUnlocked()) return;

    this.oldIndex = this.index;
    let i = this.index + 1;

    if(i >= this.slideCount) {
      i = 0;
    }
    
    //  Force move all elements to the left
    this.slides.forEach(n => {
      let nexts = n as HTMLProjectComponentElement;
      nexts.setSide(-1);
    })
    
    //  Force move the next selected elements to the right
    let old = this.slides[this.oldIndex] as HTMLProjectComponentElement;
    old.setSide(1);

    this.index = i;
  }

  render() {
    
    const arrowLeft  = getAssetPath(`../assets/arrow-left.png`);
    const arrowRight = getAssetPath(`../assets/arrow-right.png`);

    return (
      <div class='container'>
        
        <slot/>
        
        <div class='arrow-btn' id='previous-btn' onClick={this.showPreviousProject}>
          <img src={arrowLeft} draggable={false} alt='arrowLeft'/>
        </div>
        
        <div class='arrow-btn' id='next-btn' onClick={this.showNextProject}>
          <img src={arrowRight} draggable={false} alt='arrowRight'/>
        </div>

      </div>
    );
  }

}
