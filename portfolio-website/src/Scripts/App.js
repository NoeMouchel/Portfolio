import { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../Styles/App.css';

import { ThemeContextProvider, ThemeContext } from './Contexts/ThemeContext';
import { ImageOverlayContextProvider } from './Contexts/ImageOverlayContext.js';
import MainPage from './Components/MainPage.js'
import ImageOverlay from './Components/ImageOverlay';

export default class App extends Component {
  constructor(props) {
    super(props);
    library.add(fab, faChevronLeft, faChevronRight, faEnvelope);
  }

  render() {
    return (
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {themeContext => (
            <div className={`app ${themeContext.theme.name}`}>
              <ImageOverlayContextProvider>
                <MainPage />
                <ImageOverlay />
              </ImageOverlayContextProvider>
            </div>)}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    );
  }
}