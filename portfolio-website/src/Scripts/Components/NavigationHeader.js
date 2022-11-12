import { Component } from 'react';
import '../../Styles/NavigationHeader.css';
import {SCROLL_ACCEPTANCE_OFFSET} from '../Constants';

export default class NavigationHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {activeIndex: 0}
      }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => 
    {
        const pageSize = window.innerHeight;
        var y = window.scrollY;
        var active = 0;

        for(let i = 0; i< this.props.links.length; i++) {
            const linkTop = i * pageSize;
            if (y >= linkTop - SCROLL_ACCEPTANCE_OFFSET) 
            {
                active = i;
            }
        }

        this.setState({
            activeIndex: active
        })
    }

    render()
    {
        return (
            <header className={'Navigation-header ' + (this.state.activeIndex === 1 ? 'secondary ' : this.state.activeIndex === 2 ? 'tertiary' : '')}>
                <nav>
                    <ul>
                        {this.props.links?.map((element,i) => {
                            return (<li key={i.toString()}><a className = {i === this.state.activeIndex ? 'active' : '' } href={'#' + element}> {element}</a></li>);
                        })}
                    </ul>
                </nav>  
            </header>
        );
    }
}
