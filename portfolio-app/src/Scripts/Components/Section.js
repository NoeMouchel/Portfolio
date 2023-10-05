import { useRef, useContext, useEffect, useState } from 'react';

import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import '../../Styles/Components/Section.css';

//  About section content
// export default class Section extends Component {
const Section = (props) => {
    const sectionContext = useContext(SectionObserverContext);

    const visibilityThreshold = 0.25;

    let sectionRef = useRef();
    let contentRef = useRef();

    const [IsVisible, setIsVisible] = useState(false);


    const handleIntersection = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            // At least {visibilityThreshold}% of the element is visible, set IsVisible to true
            setIsVisible(true);

            //  Add the index of this section in the sectionObeserverContext
            sectionContext.addSectionIndex(props.index);
        }
        else {
            setIsVisible(false);

            //  Remove the index of this section in  the sectionObeserverContext
            sectionContext.removeSectionIndex(props.index);
        }
    }

    const handleIntersectionRef = useRef(handleIntersection);


    useEffect(() => {

        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: visibilityThreshold,
        };
        let ref = sectionRef.current;
        let intersectionObserver = new IntersectionObserver(handleIntersectionRef.current, options);
        intersectionObserver.observe(ref);

        return () => {
            if (intersectionObserver) {
                intersectionObserver.unobserve(ref);
            }
        };
    }, []);

    return (
        <section
            id={props.nameID}
            className={IsVisible ? 'in-view' : ''}
            ref={sectionRef}
        >
            <div className='section-container' ref={contentRef}>
                {props.children}
            </div>
        </section>
    );
}

export default Section;
