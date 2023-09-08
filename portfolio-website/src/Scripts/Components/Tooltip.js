import './../../Styles/Components/Tooltip.css';

function Tooltip(props) {
    let style = {
        '--apparition-delay': props.delay,
        '--step-height': props.stepHeight
    };

    return (
        <span className="tooltip-parent" >
            {props.children}
            {
                props.content ? <span className='tooltip' style={style}> {props.content} </span> : null
            }
        </span >
    );
}

Tooltip.defaultProps = {
    content: null,
    delay: '0s',
    stepHeight: '0%'
};

export default Tooltip;