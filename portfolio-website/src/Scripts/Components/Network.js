import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../../Styles/Components/Network.css';

import LinkIcon from './LinkIcon';

const Network = () => (
    <div className='network'>
        <div className='network-icons'>
            <ul>

                <li>
                    <LinkIcon
                        link='https://www.linkedin.com/in/no%C3%A9-mouchel-52950b231/'
                        icon={faLinkedin}
                        color='#5b87d0'
                        tooltip='Come to my linkedIn profile !'>
                    </LinkIcon>
                </li>
                <li>
                    <LinkIcon
                        link='https://github.com/NoeMouchel/'
                        icon={faGithub}
                        color='#3d9e58'
                        tooltip='Visit my github profile !'>
                    </LinkIcon>
                </li>
                <li>
                    <LinkIcon
                        link='https://noe-mouchel.itch.io/'
                        icon={faItchIo}
                        color='#e86472'
                        tooltip='Visit my itch.io page !'>
                    </LinkIcon>
                </li>

                <li>
                    <LinkIcon
                        link='mailto: moucnoe@gmail.com'
                        icon={faEnvelope}
                        color='#6492e8'
                        tooltip='Contact me by email !'>
                    </LinkIcon>
                </li>
            </ul>
        </div>
    </div>
);

export default Network;