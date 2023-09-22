import '../../Styles/Components/Timeline.css';
import timeline from '../Datas/TimelineDatas';

import TimelineItem from './TimelineItem'

//  Timeline section content
const Timeline = () => (
    <div className='timeline'>
        <div className="timeline-container">
            {timeline.map((element, i) => {
                return (
                    <TimelineItem data={element} index={i} key={i} />
                );
            })}
        </div>
    </div>
);

export default Timeline;