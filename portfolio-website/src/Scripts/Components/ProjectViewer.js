import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faHourglass, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

import '../../Styles/Components/ProjectViewer.css';

import LinkIcon from './LinkIcon';
import ProjectGallery from './ProjectGallery';
import ProjectTag from './ProjectTag';

export default class ProjectViewer extends Component {

    render() {
        let openedClass = this.props.opened ? 'opened ' : '';
        return (
            <div className={'project-viewer ' + openedClass}>

                <div className={'project-image-container ' + openedClass}>
                    <img src={`/Assets/ProjectCovers/${this.props.data.cover}`} alt={`${this.props.data.name}'s project cover`} draggable='false' />
                </div>
                {(this.props.opened) && <div className='description'>

                    <div className='project-header'>
                        <h3>
                            {this.props.data.name}
                            {this.props.data.inGroup ?
                                <FontAwesomeIcon className='group-statut' icon={faUser} /> :
                                <FontAwesomeIcon className='group-statut' icon={faUsers} />}
                        </h3>

                        {this.props.data.tags !== undefined && <div className='project-tags'>
                            {this.props.data.tags.map((element, i) => {
                                return <ProjectTag key={i} datas={element} />
                                // return <div key={i} className='project-tag'> {`${element}`} </div>
                            })}
                        </div>}
                    </div>
                    <div className='project-text' >

                        {/* <h3> Made with : {this.props.data.tool} </h3> */}
                        <h5>
                            <FontAwesomeIcon icon={faCalendar} />
                            {` ${this.props.data.date}`} <br />

                            <FontAwesomeIcon icon={faHourglass} />
                            {` ${this.props.data.duration}`}
                        </h5>
                        <p>{this.props.data.description}</p>
                    </div>
                    {(this.props.data.images !== undefined) && <ProjectGallery images={this.props.data.images} />}

                    <div className='links'>
                        {this.props.data.github_link ? <LinkIcon link={this.props.data.github_link} icon={faGithub} color='#3d9e58' size='3x' /> : null}
                        {this.props.data.itchio_link ? <LinkIcon link={this.props.data.itchio_link} icon={faItchIo} color='#e86472' size='3x' /> : null}
                    </div>
                </div>}
            </div >
        );
    }
}
