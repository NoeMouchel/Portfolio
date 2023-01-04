import { Component, Children, cloneElement } from 'react';
import { randFloat } from 'three/src/math/MathUtils';
import '../../Styles/ToolLogo.css';

export default class ToolLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {activeIndex: 0}
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({activeIndex : (this.state.activeIndex + 1) % this.props.children.length}), randFloat(3500.0, 6000.0));
    }
    
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    render() {
        return (
            <div className='Tool-logo'>
                {
                    Children.map(this.props.children, (el,i) => 
                    {
                        return (
                            <div className={'Logo-image ' + (i === this.state.activeIndex ? 'Active ' : '')}>
                                {cloneElement(el)}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}