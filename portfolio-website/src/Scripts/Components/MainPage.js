import { Component } from 'react';

import '../../Styles/Components/MainPage.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';

import NavigationHeader from './NavigationHeader';
import Background from './Background';
import About from './About';
import Work from './Work';
import Network from './Network';
import Section from './Section';

export default class MainPage extends Component {
  static contextType = ImageOverlayContext;

  render() {

    let imageOverlayContext = this.context;

    return (
      <div className={`main-page ${imageOverlayContext.images !== undefined ? 'paused' : ''}`}>
        <NavigationHeader links={['about', 'works', 'networks']} />

        <div className='page-sections'>

          <Background />

          {/* About section */}

          <Section nameID='about' title='about'>
            <About />
          </Section>

          {/* Work section */}

          <Section nameID='works' title='works'>
            <Work />
          </Section>

          {/* Network section */}

          <Section nameID='networks' title='networks'>
            <Network />
          </Section>

        </div>
      </div >
    );
  }
}