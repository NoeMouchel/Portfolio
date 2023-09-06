import '../Styles/App.css';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';
import ProjectsSlider from './Components/ProjectsSlider';
import ProjectViewer from './Components/ProjectViewer';
import Background from './Components/Background';
import About from './Components/About';
import Network from './Components/Network';
import { projects } from './Datas/Projects.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from './Contexts/ThemeContext';
import { ImageOverlayContextProvider } from './Contexts/ImageOverlayContext.js';
import ImageOverlay from './Components/ImageOverlay';

export default class App extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    library.add(fab, faChevronLeft, faChevronRight, faEnvelope);
  }

  render() {
    return (
      <div className={`app ${this.context.theme.name}`}>
        <ImageOverlayContextProvider>
          <NavigationHeader links={['about', 'works', 'networks']} />

          <div className='app-page'>

            <Background />

            {/* About section */}

            <section id='about'>
              <div className='section-container'>
                <h1 className='section-title'>About</h1>
                <About />
              </div>
            </section>

            {/* Work section */}

            <section id='works'>
              <div className='section-container'>
                <h1 className='section-title'>WORKS</h1>

                <ProjectsSlider>
                  {
                    projects.map((data, i) => {
                      return (
                        <ProjectViewer key={i} data={data}></ProjectViewer>)
                    })
                  }
                </ProjectsSlider>
              </div>
            </section>

            {/* Network section */}

            <section id='networks'>
              <div className='section-container'>
                <Network />

              </div>
            </section>


          </div>
          <ImageOverlay />
        </ImageOverlayContextProvider>
      </div>
    );
  }
}