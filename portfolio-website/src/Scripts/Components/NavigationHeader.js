import { Component } from 'react';
import '../../Styles/NavigationHeader.css';
import { ColorContext } from '../../Contexts/ColorContext';
import { colorSets } from '../Datas/Colors.js'

const SCROLL_ACCEPTANCE_OFFSET = 100;

export default class NavigationHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            levelColors: ['blue', 'purple', 'orange']
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let colorContext = this.context;

        const pageSize = window.innerHeight;
        var y = window.scrollY;
        var active = 0;

        for (let i = 0; i < this.props.links.length; i++) {
            const linkTop = i * pageSize;
            if (y >= linkTop - SCROLL_ACCEPTANCE_OFFSET) {
                active = i;

                // Change all jewerely colors from here
                colorContext.setColors(colorSets[this.state.levelColors[i]])
            }
        }

        this.setState({
            activeIndex: active
        })
    }

    render() {
        return (
            <header className='Navigation-header'>
                <nav>
                    <ul>
                        {this.props.links?.map((element, i) => {
                            return (<li key={i.toString()}><a className={i === this.state.activeIndex ? 'active' : ''} href={'#' + element}> {element}</a></li>);
                        })}
                    </ul>
                </nav>
            </header>
        );
    }
}

NavigationHeader.contextType = ColorContext;