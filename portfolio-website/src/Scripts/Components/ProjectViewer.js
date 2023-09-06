import { Component } from 'react';
import '../../Styles/ProjectViewer.css';
import LinkIcon from './LinkIcon'
import ProjectGallery from './ProjectGallery';

export default class ProjectViewer extends Component {

    render() {
        let openedClass = this.props.opened ? 'opened ' : '';
        return (
            <div className={'project-viewer ' + openedClass}>

                <div className={'project-image-container ' + openedClass}>
                    <img src={`/Assets/ProjectCovers/${this.props.data.cover}`} alt={`${this.props.data.name}'s project cover`} draggable='false' />
                </div>
                {(this.props.opened) && <div className='description'>

                    <div className='project-text' >
                        <h2>{this.props.data.name}</h2>

                        <h3> Made with : {this.props.data.tool} </h3>
                        <h4>
                            Date : {this.props.data.date} <br />
                            For : {this.props.data.duration}
                        </h4>
                        <p>{this.props.data.description}</p>
                    </div>
                    {(this.props.data.images !== undefined) && <ProjectGallery images={this.props.data.images} />}

                    <div className='links'>
                        {this.props.data.github_link ? <LinkIcon link={this.props.data.github_link} icon={['fab', 'github']} color='#3d9e58' size='3x' /> : null}
                        {this.props.data.itchio_link ? <LinkIcon link={this.props.data.itchio_link} icon={['fab', 'itch-io']} color='#a63d52' size='3x' /> : null}
                    </div>
                </div>}
            </div >
        );
    }
}
