import '../../styles/components/Timeline.css';
import experiences from '../datas/ExperiencesDatas';

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