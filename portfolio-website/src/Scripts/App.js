import { Component } from 'react';
import '../Styles/App.css';

import { ThemeContextProvider, ThemeContext } from './Contexts/ThemeContext';
import { ImageOverlayContextProvider } from './Contexts/ImageOverlayContext.js';
import MainPage from './Components/MainPage.js'
import ImageOverlay from './Components/ImageOverlay';

export default class App extends Component {

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