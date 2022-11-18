import { Component } from 'react';
import LinkIcon from './LinkIcon'
import '../../Styles/Contact.css';

export default class Background extends Component {

    render()
    {
        return (
        <div className='Contact'>
            <h1 className = 'Section-title'>CONTACT</h1>

            <p>moucnoe@gmail.com</p> <br/>

            <div className="Contact-icons">
                <LinkIcon link='https://www.linkedin.com/in/no%C3%A9-mouchel-52950b231/' iconName='linkedin' color='#5b87d0'></LinkIcon>
                <LinkIcon link='https://github.com/NoeMouchel/' iconName='github' color='#3d9e58'></LinkIcon>
                <LinkIcon link='https://noe-mouchel.itch.io/' iconName='itch-io' color='#a63d52'></LinkIcon>
            </div>
        </div>);
    }
}
