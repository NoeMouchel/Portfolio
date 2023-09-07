import { Component } from 'react';

import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import '../../Styles/Components/Section.css';

//  About section content
export default class Section extends Component {

    static contextType = SectionObserverContext;

    visibilityThreshold = 0;
    focusThreshold = 0.55;

    constructor(props) {
        super(props);
        this.container = null;
        this.state = {
            isFocused: false,
            isVisible: false,
        };

    }

    componentDidMount() {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: [this.visibilityThreshold, this.focusThreshold], // Trigger at 0% and 55% visibility
        };

        this.intersectionObserver = new IntersectionObserver(this.handleIntersection, options);
        this.intersectionObserver.observe(this.container);
    }

    componentWillUnmount() {

        if (this.visibilityIntersetionObserver) {
            this.visibilityIntersetionObserver.disconnect();
            this.setState({ isVisible: false });
        }
        if (this.focusIntersectionObserver) {
            this.focusIntersectionObserver.disconnect();
            this.setState({ isFocused: false });
        }
    }

    handleIntersection = (entries) => {
        entries.forEach((entry) => {
            //  First check visibility intersections
            if (!this.handleVisibilityIntersection(entry)) return;

            //  Then if the visibility threshold has been reached check for focus intersections
            this.handleFocusIntersection(entry);
        })
    }


    handleVisibilityIntersection = (entry) => {
        if (entry.intersectionRatio <= this.visibilityThreshold) {
            // The element is not in the viewport, handle this case if needed
            this.setState({ isVisible: false });
            return false;
        }

        // The element is in the viewport
        if (!this.state.isVisible) {
            this.setState({ isVisible: true });
        }

        return true;
    }


    handleFocusIntersection = (entry) => {
        if (entry.intersectionRatio <= this.focusThreshold) {
            // Less than 55% of the element is visible, set isFocused to false
            this.setState({ isFocused: false });
            return false;
        }

        // At least {focusThreshold}% of the element is visible, set isFocused to true
        this.setState({ isFocused: true });

        //  Set the index of this section in  the sectionObeserverContext
        this.context.setSectionIndex(this.props.index);

        return true;
    }


    render() {
        return (
            <section
                id={this.props.nameID}
                className={this.state.isFocused ? 'in-view' : ''}
                ref={section => { this.container = section; }}
            >
                {(this.state.isVisible) && <div className='section-container'>
                    <h1 className='section-title'>{this.props.title.toUpperCase()}</h1>
                    {this.props.children}
                </div>}
            </section>
        );
    }
}
