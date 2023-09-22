import { useContext } from 'react';

import '../../Styles/Components/MainPage.css';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';
import { SectionObserverContextProvider } from '../Contexts/SectionObserverContext.js';

import NavigationHeader from './NavigationHeader';
import Background from './Background';
import AboutMe from './AboutMe';
import Work from './Work';
import Network from './Network';
import Section from './Section';
import Timeline from './Timeline';

const MainPage = () => {

  const imageOverlayContext = useContext(ImageOverlayContext);

  return (
    <div className={`main-page ${imageOverlayContext.images !== undefined ? 'paused' : ''}`}>

      <Background />
      <SectionObserverContextProvider>
        <NavigationHeader links={['about me', 'works', 'timeline', 'networks']} />

        <div className='page-sections'>

          {/* AboutMe section */}

          <Section nameID='about me' index={0}>
            <AboutMe />
          </Section>

          {/* Work section */}

          <Section nameID='works' index={1}>
            <Work />
          </Section>

          {/* Timeline section */}

          <Section nameID='timeline' index={2}>
            <Timeline />
          </Section>

          {/* Network section */}

          <Section nameID='networks' index={3}>
            <Network />
          </Section>

        </div>
      </SectionObserverContextProvider>

      <div className='footer'>
        <p>
          © 2023 Noé MOUCHEL, aka Spaat, Inc. All rights reserved.
        </p>
      </div>
    </div >
  );
}

export default MainPage;