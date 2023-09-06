import { Component } from 'react';
import '../../Styles/NavigationHeader.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import ToggleTheme from './ToggleTheme'
import { Themes } from '../Datas/Themes';

const SCROLL_ACCEPTANCE_OFFSET = 100;

export default class NavigationHeader extends Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            levelColors: ['blue', 'purple', 'orange'],
            isChecked: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let themeContext = this.context;

        const pageSize = window.innerHeight;
        var y = window.scrollY;
        var active = 0;

        for (let i = 0; i < this.props.links.length; i++) {
            const linkTop = i * pageSize;
            if (y >= linkTop - SCROLL_ACCEPTANCE_OFFSET) {
                active = i;

                // Change all jewerely colors from here

                themeContext.setColorIndex(i);
            }
        }

        this.setState({
            activeIndex: active
        })
    }

    render() {

        let themeContext = this.context;

        return (
            <header className='navigation-header'>
                <div className='logo white-image'>
                    <img src='/Assets/LOGO_spaat_white.png' alt='pseudonym logo' draggable={false} />
                </div>
                <nav>
                    <ul>
                        {this.props.links?.map((element, i) => {
                            return (
                                <li key={i.toString()}>
                                    <a className={i === this.state.activeIndex ? 'active' : ''} href={'#' + element}>
                                        {element}
                                    </a>
                                </li>);
                        })}
                    </ul>

                </nav>

                <div className='themeToggle'>
                    <ToggleTheme
                        isDark={!this.checked}
                        onChange={() => {
                            this.checked = !this.checked;
                            if (this.checked)
                                themeContext.setTheme(Themes.light);
                            else
                                themeContext.setTheme(Themes.dark);
                        }}
                    />
                    <div />

                </div>
            </header >
        );
    }
}