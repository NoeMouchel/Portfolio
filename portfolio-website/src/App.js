import './Styles/App.css';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';
import ProjectViewer from './Components/ProjectViewer';
import ProjectsSlider from './Components/ProjectsSlider';
import Background from './Components/Background';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
              <ProjectViewer name='WoodoFlies'>
                <p> lorem daa daoidn doa bdudbai dbaib iabd ab aub uiab iuabi ubaiub uabo baoibob  </p> 
              </ProjectViewer>
              <ProjectViewer name='Hydrill'> </ProjectViewer>
              <ProjectViewer name='Platformer'> </ProjectViewer>
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