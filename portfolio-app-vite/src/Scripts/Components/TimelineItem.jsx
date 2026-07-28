import '../../Styles/Components/TimelineItem.css';

const TimelineItem = ({ data, index }) => (
    <div className="timeline-item" style={{ '--item-delay': `${index * 0.1}s` }}>
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <h4>{data.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
        <span className="dot" />
    </div>
);

export default TimelineItem;