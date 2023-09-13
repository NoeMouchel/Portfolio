import './../../Styles/Components/Tooltip.css';

const Tooltip = (props) => (
    <span className="tooltip-parent" >
        {props.children}
        {props.content &&
            <span
                className='tooltip'
                style={{
                    '--apparition-delay': props.delay,
                    '--step-height': props.stepHeight
                }}
            >
                {props.content}
            </span>
        }
    </span >
);


Tooltip.defaultProps = {
    content: null,
    delay: '0s',
    stepHeight: '0%'
};

export default Tooltip;