import '../Styles/App.css';

import { ThemeContextProvider, ThemeContext } from './Contexts/ThemeContext.jsx';
import { ImageOverlayContextProvider } from './Contexts/ImageOverlayContext.jsx';
import MainPage from './Components/MainPage.jsx'
import ImageOverlay from './Components/ImageOverlay.jsx';

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