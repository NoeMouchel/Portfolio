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
              A 3rd year game programmer student at ISART Digital Paris.
              I am also working on multiple personal projects that are yet to be finished !
              Enjoy your visit on my portfolio, hope you'll like my projects !
            </p>
          </div>
        </section>

        {/* Work section */}

        <section id='Works'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>WORKS</h1>
            
            <ProjectsSlider>

              <ProjectViewer name='Hydrill' cover= {HyDrill}> 
                <h3> Developped with : C++ </h3>
                <p> This is a game engine project we've done in 2022 during 5 months. It was made from scratch with C++ and other libraries.</p>
              </ProjectViewer>

              <ProjectViewer name='CaveMushroom' cover = {CaveMushroom}>
                <h3> Developped with : Unreal Engine 4 </h3>
                <p> My first project with Unreal Engine 4, this is a one level game. All assets were developped by me excluding the music, I am pretty proud of the result. </p>
              </ProjectViewer>

              <ProjectViewer name='Crowd Buster' cover = {CrowdBuster}>

              </ProjectViewer>

              <ProjectViewer name='Uncorrupted'>

              </ProjectViewer>

            </ProjectsSlider>

          </div>
        </section>
        
        {/* Contact section */}

        <section id='Contact'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>CONTACT</h1>

            <p>moucnoe@gmail.com</p> <br/>
            <a href='https://www.linkedin.com/in/no%C3%A9-mouchel-52950b231/'>Linkedin page</a> <br/>
            <a href='https://noe-mouchel.itch.io/'>Itch.io page</a> <br/>

          </div>
        </section>


      </div>
    </div>
  );
}