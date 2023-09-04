import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Styles/LinkIcon.css';

export default function LinkIcon(props) {
    return (
        // The style attribute with transform is there to fix issues of z index
        <div className='Link-icon' >
            <a href={props.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.size || '8x'}
                    color={props.color} />
                {props.tooltip ? <span className="tooltip">{props.tooltip}</span> : null}
            </a>
        </div>
    );
}
