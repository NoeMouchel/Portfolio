import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Styles/LinkIcon.css';

export default function LinkIcon(props) {
    return (
        <div className='Link-icon'>
            <a href={props.link}>
                <FontAwesomeIcon icon={['fab', props.iconName]} size='8x' color={props.color}/>
            </a>
        </div>
    );
}
