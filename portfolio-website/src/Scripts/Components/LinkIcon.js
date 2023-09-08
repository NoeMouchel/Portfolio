import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from './Tooltip';

import '../../Styles/Components/LinkIcon.css';

export default function LinkIcon(props) {
    return (
        // The style attribute with transform is there to fix issues of z index
        <div className='link-icon' >
            <Tooltip content={props.tooltip}>
                <a href={props.link} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        size={props.size || '8x'}
                        color={props.color} />
                </a>
            </Tooltip>
        </div>
    );
}
