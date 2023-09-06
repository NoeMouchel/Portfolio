import { Component } from 'react';

import { ThemeContext } from '../Contexts/ThemeContext';
import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import { Themes } from '../Datas/Themes';
import '../../Styles/Components/NavigationHeader.css';

import ToggleTheme from './ToggleTheme'

export default class NavigationHeader extends Component {

    // static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            levelColors: ['blue', 'purple', 'orange'],
            isChecked: false,
        }
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = () => {
    //     let themeContext = this.context;

    //     const pageSize = window.innerHeight;
    //     var y = window.scrollY;
    //     var active = 0;

    //     for (let i = 0; i < this.props.links.length; i++) {
    //         const linkTop = i * pageSize;
    //         if (y >= linkTop - SCROLL_ACCEPTANCE_OFFSET) {
    //             active = i;

    //             // Change all jewerely colors from here

    //             themeContext.setColorIndex(i);
    //         }
    //     }

    //     this.setState({
    //         activeIndex: active
    //     })
    // }

    render() {

        // let themeContext = this.context;

        return (
            <header className='navigation-header'>
                <div className='logo white-image'>
                    <img src='/Assets/LOGO_spaat_white.png' alt='pseudonym logo' draggable={false} />
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
                    <ThemeContext.Consumer>
                        {themeContext => (
                            <ToggleTheme
                                isDark={!this.checked}
                                onChange={() => {
                                    this.checked = !this.checked;
                                    if (this.checked)
                                        themeContext.setTheme(Themes.light);
                                    else
                                        themeContext.setTheme(Themes.dark);
                                }}

                            />)}
                    </ThemeContext.Consumer>
                    <div />

                </div>
            </header >
        );
    }
}