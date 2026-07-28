import { useContext } from 'react';

import '../../styles/components/MainPage.css';

import { ImageOverlayContext } from '../contexts/ImageOverlayContext.jsx';
import { SectionObserverContextProvider } from '../contexts/SectionObserverContext.jsx';

import NavigationHeader from './NavigationHeader.jsx';
import Background from './Background.jsx';
import AboutMe from './AboutMe.jsx';
import Work from './Work.jsx';
import Network from './Network.jsx';
import Section from './Section.jsx';
import Timeline from './Timeline.jsx';

const MainPage = () => {

  const imageOverlayContext = useContext(ImageOverlayContext);

  return (
    <div className={`main-page ${imageOverlayContext.images !== undefined ? 'paused' : ''}`}>

      <Background />
      <SectionObserverContextProvider>
        <NavigationHeader links={['about me', 'works', 'experiences', 'networks']} />

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

          <Section nameID='experiences' index={2}>
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