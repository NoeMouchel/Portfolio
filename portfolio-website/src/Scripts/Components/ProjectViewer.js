import { Component } from 'react';
import '../../Styles/ProjectViewer.css';
import LinkIcon from './LinkIcon'

export default class ProjectViewer extends Component {
    constructor(props) {
        super(props)
        this.state = { currentDescPage: 0 }
    }

    render() {
        let openedClass = this.props.opened ? 'Opened ' : '';
        return (
            <div className={'Project-viewer ' + openedClass}>

                <div className={'Project-image-container ' + openedClass}>
                    <img src={this.props.data.cover} alt='Cover' draggable='false' />
                </div>
                {(this.props.opened) && <div className="Description">

                    <div className='Project-text' >
                        <h2>{this.props.data.name}</h2>

                        <h3> Made with : {this.props.data.tool} </h3>
                        <h4>
                            Date : {this.props.data.date} <br />
                            For : {this.props.data.duration}
                        </h4>
                        <p>{this.props.data.description}</p>
                    </div>
                    {(this.props.data.video_link === null) && <div className='Video-container'>
                        <iframe className='Video-preview' title='video' frameBorder='0' allowFullScreen src={this.props.data.video_link}></iframe>
                    </div>}
                    <div className='Links'>
                        {this.props.data.github_link ? <LinkIcon link={this.props.data.github_link} icon={['fab', 'github']} color='#3d9e58' size='2x'></LinkIcon> : null}
                        {this.props.data.itchio_link ? <LinkIcon link={this.props.data.itchio_link} icon={['fab', 'itch-io']} color='#a63d52' size='2x'></LinkIcon> : null}
                    </div>
                </div>}
            </div >
        );
    }
}
