import './Styles/App.css';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';
import ProjectViewer from './Components/ProjectViewer';
import ProjectsSlider from './Components/ProjectsSlider';

export default function App() {

  return (
    <div className="App">

      <NavigationHeader links = {['About', 'Works', 'Contact']}/>

      <div className="App-page">
      
      {/* About section */}

        <section id='About'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>Hi I'm Noé.</h1>
            <p>
              A game programmer student at ISART Digital, at Paris.
            </p>
          </div>
        </section>

        {/* Work section */}

        <section id='Works'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>WORKS</h1>
            
            <ProjectsSlider>
              <ProjectViewer name='WoodoFlies'> </ProjectViewer>
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