import { Component } from 'react';

import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import '../../Styles/Components/Section.css';

//  About section content
export default class Section extends Component {

    static contextType = SectionObserverContext;

    constructor(props) {
        super(props);
        this.container = null;
        this.state = {
            inView: false,
        };
    }

    componentDidMount() {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.55, // Trigger when at least 50% of the section is visible
        };

        this.intersectionObserver = new IntersectionObserver(this.handleIntersection, options);
        this.intersectionObserver.observe(this.container);
    }

    componentWillUnmount() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.setState({ inView: false });
        }
    }

    handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.setState({ inView: true });
                this.context.setSectionIndex(this.props.index);
            }
            else {
                this.setState({ inView: false });
            }
        });
    };

    render() {
        return (
            <section
                id={this.props.nameID}
                className={this.state.inView ? 'in-view' : ''}
                ref={section => { this.container = section; }}
            >
                <div className='section-container'>
                    <h1 className='section-title'>{this.props.title.toUpperCase()}</h1>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
