import '../Styles/App.css';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';
import ProjectsSlider from './Components/ProjectsSlider';
import ProjectViewer from './Components/ProjectViewer';
import ProjectDescription from './Components/ProjectDescription';
import Background from './Components/Background';
import Contact from './Components/Contact';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HyDrill from '../Assets/HyDrill.png'
import CaveMushroom from '../Assets/CaveMushroom.png'
import CrowdBuster from '../Assets/CrowdBuster.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App() {

  library.add(fab, faChevronLeft, faChevronRight);

  return (
    <div className="App">

      <NavigationHeader links = {['About', 'Works', 'Contact']}/>


      <div className="App-page">
      
      <Background></Background>
      {/* About section */}

        <section id='About'>
          <div className = 'Section-container'>

            <div className='About-Description'>
            <h1 className = 'Section-title'>Hi I'm Noé.</h1>
            <p>
              A 3rd year game programmer student at ISART Digital Paris. <br/>
              I am also working on multiple personal projects that are yet to be finished ! <br/>
              Enjoy your visit on my portfolio, hope you'll like my projects !
            </p>

            <h2> What can I do ?</h2>
            
            <p>
              TODO : Logo slider here
            </p>

            </div>

            <div className='About-image'>
              {/* <img src={HyDrill} alt='plpo'></img> */}
            </div>
          </div>
        </section>

        {/* Work section */}

        <section id='Works'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>WORKS</h1>
            
            <ProjectsSlider>

              <ProjectViewer name='Hydrill' cover= {HyDrill}> 
                <ProjectDescription>
                  <h3> Developped with : C++ </h3>
                  <p> 
                    This is a game engine project we've done in 2022 during 5 months. It was made from scratch with C++ and other libraries. <br/>
                    During this project, I made the engine renderer, the editor functionalities and interface then our own particle system.  <br/>
                  </p>

                  <h4> Renderer </h4>

                  <p>
                    - The renderer is made with OpenGL, it supports physically based renderering materials, shadows from all types of light source, particles rendering, animated skeletal meshes.
                  </p>
                </ProjectDescription>
              </ProjectViewer>

              <ProjectViewer name='CaveMushroom' cover = {CaveMushroom}>
                <ProjectDescription>
                  <h3> Developped with : Unreal Engine 4 </h3>
                  <p> My first project with Unreal Engine 4, this is a one level game. All assets were developped by me excluding the music, I am pretty proud of the result. </p>
                </ProjectDescription>
              </ProjectViewer>

              <ProjectViewer name='Crowd Buster' cover = {CrowdBuster}>
                  <ProjectDescription>
                    <h3> Developped with : Unity </h3>
                    <p> game week project </p>
                  </ProjectDescription>
              </ProjectViewer>

              <ProjectViewer name='Uncorrupted'>
                  <ProjectDescription>
                    <h3> Developped with : Unity </h3>
                    <p> first unity project </p>
                  </ProjectDescription>
              </ProjectViewer>

            </ProjectsSlider>

          </div>
        </section>
        
        {/* Contact section */}

        <section id='Contact'>
          <div className = 'Section-container'>
            <Contact/>
           
          </div>
        </section>


      </div>
    </div>
  );
}