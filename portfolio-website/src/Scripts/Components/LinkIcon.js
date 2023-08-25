import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Styles/LinkIcon.css';

export default function LinkIcon(props) {
    return (
        <div className='Link-icon'>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', props.iconName]} size={props.size || '8x'} color={props.color} />
            </a>
        </div>
    );
}
