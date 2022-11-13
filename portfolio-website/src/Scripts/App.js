import '../Styles/App.css';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';
import ProjectViewer from './Components/ProjectViewer';
import ProjectsSlider from './Components/ProjectsSlider';
import Background from './Components/Background';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HyDrill from '../Assets/HyDrill.png'
import CaveMushroom from '../Assets/CaveMushroom.png'
import CrowdBuster from '../Assets/CrowdBuster.png'

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
            <h1 className = 'Section-title'>Hi I'm Noé.</h1>
            <p>
              A game programmer student at ISART Digital Paris.
            </p>
          </div>
        </section>

        {/* Work section */}

        <section id='Works'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>WORKS</h1>
            
            <ProjectsSlider>
              <ProjectViewer name='Hydrill' cover= {HyDrill}> 
                <p> This is a game engine project we've done in 2022 dduring 5 months</p>
              </ProjectViewer>
              <ProjectViewer name='Platformer - UE4' cover = {CaveMushroom}></ProjectViewer>
              <ProjectViewer name='Crowd Buster - Unity' cover = {CrowdBuster}></ProjectViewer>
              <ProjectViewer name='Platformer - Unity'></ProjectViewer>

              <ProjectViewer name='Woodflies - Unity'></ProjectViewer>
              <ProjectViewer name='Marching Cubes - Unity'></ProjectViewer>
              <ProjectViewer name='State Machine Tool - Unity'></ProjectViewer>
            </ProjectsSlider>

          </div>
        </section>
        
        {/* Contact section */}

        <section id='Contact'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>CONTACT</h1>
          </div>

        </section>


      </div>
    </div>
  );
}