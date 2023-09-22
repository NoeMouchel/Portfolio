import { useRef, useContext, useEffect, useState } from 'react';

import { SectionObserverContext } from '../Contexts/SectionObserverContext';

import '../../Styles/Components/Section.css';

//  About section content
// export default class Section extends Component {
const Section = (props) => {
    // static contextType = SectionObserverContext;

    const sectionContext = useContext(SectionObserverContext);

    const visibilityThreshold = 0.5;

    let sectionRef = useRef();
    let contentRef = useRef();

    const [IsVisible, setIsVisible] = useState(false);


    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            // At least {visibilityThreshold}% of the element is visible, set IsVisible to true
            setIsVisible(true);

            //  Set the index of this section in  the sectionObeserverContext
            sectionContext.setSectionIndex(props.index);
        }
        else {
            setIsVisible(false);
        }
    }

    const handleIntersectionRef = useRef(handleIntersection);


    useEffect(() => {

        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: visibilityThreshold,
        };

        let intersectionObserver = new IntersectionObserver(handleIntersectionRef.current, options);
        intersectionObserver.observe(sectionRef.current);

        return () => {
            if (intersectionObserver) {
                intersectionObserver.disconnect();
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
