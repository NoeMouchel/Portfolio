import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faHourglass, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

import '../../Styles/Components/ProjectViewer.css';

import Tooltip from './Tooltip';
import LinkIcon from './LinkIcon';
import ProjectGallery from './ProjectGallery';
import ProjectTag from './ProjectTag';

export default class ProjectViewer extends Component {

    render() {
        let openedClass = this.props.opened ? 'opened ' : '';
        let projectData = this.props.data;

        return (
            <div className={'project-viewer ' + openedClass}>

                <div className={'project-image-container ' + openedClass}>
                    <img src={`/Assets/ProjectCovers/${projectData.cover}`} alt={`${projectData.name}'s project cover`} draggable='false' />
                </div>
                {(this.props.opened) && <div className='description'>

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
                                // return <div key={i} className='project-tag'> {`${element}`} </div>
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
                        {projectData.github_link ? <LinkIcon link={projectData.github_link} icon={faGithub} color='#3d9e58' size='3x' /> : null}
                        {this.props.data.itchio_link ? <LinkIcon link={this.props.data.itchio_link} icon={faItchIo} color='#e86472' size='3x' /> : null}
                    </div>
                </div>}
            </div >
        );
    }
}
