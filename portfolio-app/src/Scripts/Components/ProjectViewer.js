import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faHourglass, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

import '../../Styles/Components/ProjectViewer.css';

import Tooltip from './Tooltip';
import LinkIcon from './LinkIcon';
import ProjectGallery from './ProjectGallery';
import ProjectTag from './ProjectTag';

const ProjectViewer = (props) => {
    const projectData = props.data;
    const openedClass = props.opened ? 'opened ' : '';

    return (
        <div className={'project-viewer ' + openedClass}>

            <div className={'project-image-container ' + openedClass}>
                <img src={`/Portfolio/Assets/ProjectCovers/${projectData.cover}`} alt={`${projectData.name}'s project cover`} draggable='false' />
            </div>
            {(props.opened) && <div className='description'>

                <div className='project-header'>
                    <h3>
                        {projectData.name}
                        <span className='team-statut'>
                            <Tooltip content={projectData.teammates === 0 ? 'solo' : `team of ${projectData.teammates + 1}`}>
                                <FontAwesomeIcon className='team-statut-icon' icon={projectData.teammates === 0 ? faUser : faUsers} />
                            </Tooltip>
                        </span>
                    </h3>

                    {projectData.tags !== undefined && <div className='project-tags'>
                        {projectData.tags.map((element, i) => {
                            return <ProjectTag key={i} datas={element} />
                        })}
                    </div>}
                </div>
                <div className='project-text' >
                    <h5>
                        <FontAwesomeIcon icon={faCalendar} />
                        {` ${projectData.date}`} <br />

                        <FontAwesomeIcon icon={faHourglass} />
                        {` ${projectData.duration}`}
                    </h5>
                    <p dangerouslySetInnerHTML={{ __html: projectData.description }} />
                </div>
                {(projectData.images !== undefined) && <ProjectGallery images={projectData.images} />}

                <div className='links'>
                    {projectData.github_link ?
                        <div className='link-container'>
                            <LinkIcon link={projectData.github_link} icon={faGithub} color='#3d9e58' size='3x' />
                        </div>
                        : null}
                    {props.data.itchio_link ?
                        <div className='link-container'>
                            <LinkIcon link={props.data.itchio_link} icon={faItchIo} color='#e86472' size='3x' />
                        </div>
                        : null}
                </div>
            </div>}
        </div >
    );
}

export default ProjectViewer;