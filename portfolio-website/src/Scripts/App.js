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
import { ColorContextProvider } from '../Contexts/ColorContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    library.add(fab, faChevronLeft, faChevronRight, faEnvelope);
  }

  render() {
    return (
      <div className="App">
        <ColorContextProvider>
          <NavigationHeader links={['About', 'Works', 'Networks']} />


          <div className="App-page">

            <Background></Background>
            {/* About section */}

            <section id='About'>
              <div className='Section-container'>
                <h1 className='Section-title'>About</h1>

                <About>
                  <div className='About-SubDescription'>
                    <h1>Hi I'm Noé.</h1>
                    <p>
                      A 3rd year game programmer student at <b>ISART Digital Paris</b>.<br />
                      I am also working on multiple personal projects that are yet to be finished! Enjoy your visit on my portfolio, hope you'll like my projects!
                    </p>
                  </div>

                  {/* <div className='About-SubDescription'>
                <h1>Specialities..</h1>
                <p>
                  I like coding games but I am more fond of making game technologies about environments and immersions like realistic terrain generations, vegetation growing simulations or an ecosystem working with AIs using neural networks. Those are not yet projects that I actually did but some ideas of what I want to achieve.
                </p>
              </div> */}
                </About>

              </div>
            </section>

            {/* Work section */}

            <section id='Works'>
              <div className='Section-container'>
                <h1 className='Section-title'>WORKS</h1>

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

            <section id='Networks'>
              <div className='Section-container'>
                <Network />

              </div>
            </section>


          </div>
        </ColorContextProvider>
      </div>
    );
  }
}