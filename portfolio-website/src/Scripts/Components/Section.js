import { Component } from 'react';
import { } from 'react-intersection-observer';

import '../../Styles/Components/Section.css';

//  About section content
export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inView: false,
        };
    }

    componentDidMount() {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when at least 50% of the section is visible
        };

        this.intersectionObserver = new IntersectionObserver(this.handleIntersection, options);
        this.intersectionObserver.observe(this.sectionRef.current);
    }

    componentWillUnmount() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
    }

    handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("hi !");
                this.setState({ inView: true });
                this.intersectionObserver.unobserve(entry.target); // Stop observing after the first intersection
            }
        });
    };

    render() {
        return (
            <section id={this.props.nameID}>
                <div className='section-container'>
                    <h1 className='section-title'>{this.props.title.toUpperCase()}</h1>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
