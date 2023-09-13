import '../../Styles/Components/Timeline.css';
import { timeline } from '../Datas/Timeline.js';

//  Timeline section content
const Timeline = () => (
    <div className='timeline'>
        {timeline.foreach((element, i) => {
            <div className='timeline-description' key={i}></div>
        })}
    </div>
);

export default Timeline;