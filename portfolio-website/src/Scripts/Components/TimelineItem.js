import '../../Styles/Components/TimelineItem.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <h4>{data.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;