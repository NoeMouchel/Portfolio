import { Component, State, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'project-slider',
  styleUrl: 'project-slider.css',
  shadow: true,
  assetsDirs: ['../assets'],
})
export class ProjectSlider {

  @State() index : number = 0;

  projectList : any = [
    <project-component class='project' projectName='Woodflies'></project-component>,
    <project-component class='project' projectName='Platformer'></project-component>,
    <project-component class='project' projectName='Hydrill Engine'></project-component>
  ];

  switchProjectTo = (dir : number) => {
    this.index = (this.index + dir)% (this.projectList.length);
  }

  render() {
    
    const arrowLeft  = getAssetPath(`../assets/arrow-left.png`);
    const arrowRight = getAssetPath(`../assets/arrow-right.png`);

    return (
      <div class='container'>
        
        {this.projectList[this.index]}

        
        <div class='arrow-btn' id='previous-btn' onClick={ () => this.switchProjectTo(-1)}>
          <img src={arrowLeft} draggable={false} alt='arrowLeft'/>
        </div>
        
        <div class='arrow-btn' id='next-btn' onClick={ () => this.switchProjectTo(1)}>
          <img src={arrowRight} draggable={false} alt='arrowRight'/>
        </div>

      </div>
    );
  }

}
