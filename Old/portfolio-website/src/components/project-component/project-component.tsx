import { Component, Method, State,Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'project-component',
  styleUrl: 'project-component.css',
  shadow: true,
})
export class ProjectComponent {

  @Prop() projectName: string;
  
  @Prop({ mutable: true }) isActive : boolean = false;

  @State() direction : number = 0;

  componentDidUpdate() {
    
  }

  @Method()
  async setSide(dir : number) {
    this.direction = dir;
  }

  @Method()
  async setActive(active : boolean) {
    this.isActive = active;
  }

  render() {
    return (
      <div class= {{ 
        'content' : true,
        'right' : this.direction > 0, 
        'left'  : this.direction < 0, 
        'active' : this.isActive
        }}>
      
      <h2>{this.projectName}</h2>
      <slot/>

      </div>
      );
  }

}
