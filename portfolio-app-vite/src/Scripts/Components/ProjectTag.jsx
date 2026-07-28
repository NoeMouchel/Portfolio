import Tooltip from './Tooltip';

import '../../styles/components/ProjectTag.css';

const ProjectTag = ({ datas }) => (
    <div className='tag-container'>
        <Tooltip content={datas.tooltip} stepHeight='0.25rem'>
            <div className='project-tag' style={{ backgroundColor: datas.color }}>
                {datas.name}
            </div >
        </Tooltip>
    </div>
);

export default ProjectTag;
