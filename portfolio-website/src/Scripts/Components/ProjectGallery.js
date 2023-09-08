import { useContext } from 'react';

import { ImageOverlayContext } from '../Contexts/ImageOverlayContext.js';

import '../../Styles/Components/ProjectGallery.css';

const ProjectGallery = (props) => {

    let imageOverlayContext = useContext(ImageOverlayContext);

    return (
        <div className='project-gallery' onClick={(e) => e.stopPropagation()}>
            <ul>
                {
                    props.images.map((element, i) => {
                        return <li key={i}>
                            <img
                                src={`/Assets/ProjectsImages/${element}`}
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