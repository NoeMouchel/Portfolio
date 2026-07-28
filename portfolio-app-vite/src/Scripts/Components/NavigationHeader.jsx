import { SectionObserverContext } from '../contexts/SectionObserverContext';

import '../../Styles/Components/NavigationHeader.css';

import ToggleTheme from './ToggleTheme'

const NavigationHeader = (props) => (
    <header className='navigation-header'>
        <div className='logo white-image'>
            <img src='assets/LOGO_spaat_white.svg' alt='pseudonym logo' draggable={false} />
        </div>
        <nav>
            <SectionObserverContext.Consumer>
                {sectionObserverContext => (
                    <ul>
                        {props.links?.map((element, i) => {
                            return (
                                <li className={i === sectionObserverContext.sectionIndex ? 'current' : ''} key={i.toString()}>
                                    <a href={'#' + element}>
                                        {element.toUpperCase()}
                                    </a>
                                </li>);
                        })}
                    </ul>)}
            </SectionObserverContext.Consumer>
        </nav>

        <div className='themeToggle'>
            <ToggleTheme />
        </div>
    </header >
);

export default NavigationHeader;