import '../../Styles/Components/Timeline.css';
import experiences from '../Datas/ExperiencesDatas';

import TimelineItem from './TimelineItem'

//  Timeline section content
const Timeline = () => (
    <div className='timeline'>
        <div className="timeline-container">
            {experiences.map((element, i) => {
                return (
                    <TimelineItem data={element} index={i} key={i} />
                );
            })}
        </div>
    </div>
);

export default Timeline;