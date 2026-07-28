import tools from '../datas/ToolsDatas';
import '../../styles/components/LogoViewer.css';

const LogoViewer = () => (
    <div className='logo-viewer'>
        <ul>
            {tools.map((element, i) => {
                return (
                    <li
                        key={i}
                        style={{ '--logo-delay': `${i * 0.1}s` }}
                    >
                        <img
                            className='logo white-image'
                            src={`${import.meta.env.BASE_URL}assets/tools-logo/${element.logo}`}
                            data-weight={element.weight}
                            alt='Logo'
                            draggable='false'
                        />
                    </li>
                );
            })}
        </ul>
    </div>
);

export default LogoViewer;