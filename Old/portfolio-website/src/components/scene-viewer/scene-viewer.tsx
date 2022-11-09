import { Component, Host, h } from '@stencil/core';
import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial} from 'three';

@Component({
  tag: 'scene-viewer',
  styleUrl: 'scene-viewer.css',
  shadow: true,
})
export class sceneViewer {

  scene : Scene = new Scene();
  camera : PerspectiveCamera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer : WebGLRenderer = new WebGLRenderer();

  cube : Mesh;

  componentWillLoad() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    const geometry = new BoxGeometry( 1, 1, 1 );
		const material = new MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new Mesh( geometry, material );
		this.scene.add( this.cube );

		this.camera.position.z = 5;
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera );
  };

  drawScene() {

  }

  render() {

    this.animate();
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
