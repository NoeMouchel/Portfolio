import '../styles/App.css';

import { ThemeContextProvider, ThemeContext } from './contexts/ThemeContext.jsx';
import { ImageOverlayContextProvider } from './contexts/ImageOverlayContext.jsx';
import MainPage from './components/MainPage.jsx'
import ImageOverlay from './components/ImageOverlay.jsx';

const App = () => (
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

export default App;