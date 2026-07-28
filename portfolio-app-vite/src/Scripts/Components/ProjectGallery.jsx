import { useContext } from 'react';

import { ImageOverlayContext } from '../contexts/ImageOverlayContext.jsx';

import '../../styles/components/ProjectGallery.css';

const ProjectGallery = (props) => {

    const imageOverlayContext = useContext(ImageOverlayContext);

    return (
        <div className='project-gallery' onClick={(e) => e.stopPropagation()}>
            <ul>
                {
                    props.images.map((element, i) => {
                        return <li key={i}>
                            <img
                                src={`${import.meta.env.BASE_URL}assets/projects-images/${element}`}
                                alt='Project pics'
                                draggable={false}
                                onClick={(e) => {
                                    imageOverlayContext.setImages(props.images);
                                    imageOverlayContext.setIndex(i);
                                }} />
                        </li>
                    })
                }
            </ul>
        </div>

    );
}

export default ProjectGallery;