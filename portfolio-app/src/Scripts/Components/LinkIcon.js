import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from './Tooltip';

import '../../Styles/Components/LinkIcon.css';

const LinkIcon = (props) => (
    <div className='link-icon' >
        <Tooltip content={props.tooltip} stepHeight='1rem'>
            <a href={props.link} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.size || '8x'}
                    color={props.color} />
            </a>
        </Tooltip>
    </div>
);

export default LinkIcon;