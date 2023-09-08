import { Component } from 'react';

import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import '../../Styles/Components/NavigationHeader.css';

import ToggleTheme from './ToggleTheme'

export default class NavigationHeader extends Component {

    // static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            levelColors: ['blue', 'purple', 'orange'],
            isDark: true,
        }
    }

    render() {

        return (
            <header className='navigation-header'>
                <div className='logo white-image'>
                    <img src='/Assets/LOGO_spaat_white.svg' alt='pseudonym logo' draggable={false} />
                </div>
                <nav>
                    <SectionObserverContext.Consumer>
                        {sectionObserverContext => (
                            <ul>
                                {this.props.links?.map((element, i) => {
                                    return (
                                        <li className={i === sectionObserverContext.sectionIndex ? 'active' : ''} key={i.toString()}>
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
    }
}