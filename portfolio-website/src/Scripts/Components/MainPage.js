import { useContext } from 'react';

import '../../Styles/Components/MainPage.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import { SectionObserverContextProvider } from '../Contexts/SectionObserverContext.js';

import NavigationHeader from './NavigationHeader';
import Background from './Background';
import About from './About';
import Work from './Work';
import Network from './Network';
import Section from './Section';
import Timeline from './Timeline';

const MainPage = () => {

  const imageOverlayContext = useContext(ImageOverlayContext);

  return (
    <div className={`main-page ${imageOverlayContext.images !== undefined ? 'paused' : ''}`}>
      <SectionObserverContextProvider>
        <NavigationHeader links={['about', 'works', 'timeline', 'networks']} />

        <div className='page-sections'>

          <Background />

          {/* About section */}

          <Section nameID='about' index={0} title='about'>
            <About />
          </Section>

          {/* Work section */}

          <Section nameID='works' index={1} title='works'>
            <Work />
          </Section>

          {/* Timeline section */}

          <Section nameID='timeline' index={2} title='timeline'>
            <Timeline />
          </Section>

          {/* Network section */}

          <Section nameID='networks' index={3} title='networks'>
            <Network />
          </Section>

        </div>
      </SectionObserverContextProvider>
    </div >
  );
}

export default MainPage;