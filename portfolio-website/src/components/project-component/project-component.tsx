import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'project-component',
  styleUrl: 'project-component.css',
  shadow: true,
})
export class ProjectComponent {

  @Prop() projectName: string;

  render() {
    return <div class='Content'>
      
      <h2> {this.projectName} </h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam delectus sunt ad repellendus, enim officia nulla eveniet sit veritatis non accusamus quia dolorum consequuntur unde ut aliquid labore voluptas quas!</p>
    </div>;
  }

}
