import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Components/ArrowButton.css';

const ArrowButton = (props) => {

    const {
        size = '3rem',
        direction = -1,
    } = props;

    return (
        <div
            className='arrow-btn'
            id={direction <= 0 ? 'arrow-btn-left' : 'arrow-btn-right'}
            style={{ '--button-size': size }}
            onClick={(e) => {
                e.stopPropagation();
                if (props.onClickHandle !== undefined)
                    props.onClickHandle();
            }}
        >
            <FontAwesomeIcon
                className='arrow-btn-icon'
                icon={direction <= 0 ? faChevronLeft : faChevronRight}
            />
        </div>
    )
}

export default ArrowButton;