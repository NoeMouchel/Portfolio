import { tools } from '../Datas/Tools.js';
import '../../Styles/Components/LogoViewer.css';

const LogoViewer = () => (
    <div className='logo-viewer'>
        <ul>
            {tools.map((element, i) => {
                return (<li key={i}>
                    <img
                        className='logo white-image'
                        src={element.logo}
                        data-weight={element.weight}
                        alt='Logo'
                        draggable='false'
                    />
                </li>)
            })}
        </ul>
    </div>
);

export default LogoViewer;