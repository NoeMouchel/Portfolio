import { Component } from 'react';
import '../../Styles/Components/Network.css';

import LinkIcon from './LinkIcon';

export default class Network extends Component {

    render() {
        return (
            <div className='network'>
                <div className='network-icons'>
                    <ul>

                        <li>
                            <LinkIcon
                                link='https://www.linkedin.com/in/no%C3%A9-mouchel-52950b231/'
                                icon={['fab', 'linkedin']}
                                color='#5b87d0'
                                tooltip='Come to my linkedIn profile !'>
                            </LinkIcon>
                        </li>
                        <li>
                            <LinkIcon
                                link='https://github.com/NoeMouchel/'
                                icon={['fab', 'github']}
                                color='#3d9e58'
                                tooltip='Visit my github profile !'>
                            </LinkIcon>
                        </li>
                        <li>
                            <LinkIcon
                                link='https://noe-mouchel.itch.io/'
                                icon={['fab', 'itch-io']}
                                color='#e86472'
                                tooltip='Visit my itch.io page !'>
                            </LinkIcon>
                        </li>

                        <li>
                            <LinkIcon
                                link='mailto: moucnoe@gmail.com'
                                icon='envelope'
                                color='#6492e8'
                                tooltip='Contact me by email !'>
                            </LinkIcon>
                        </li>
                    </ul>
                </div>
            </div>);
    }
}
