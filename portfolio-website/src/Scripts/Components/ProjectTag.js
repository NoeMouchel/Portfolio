import '../../Styles/Components/ProjectTag.css';

const ProjectTag = ({ datas }) => (
    <div className='project-tag' style={{ backgroundColor: datas.color }}>
        {datas.name}
        {datas.tooltip ? <span className='tooltip'>{datas.tooltip}</span> : null}
    </div >
);

export default ProjectTag;
