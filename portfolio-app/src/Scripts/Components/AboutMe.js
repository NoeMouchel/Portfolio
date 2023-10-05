import '../../Styles/Components/AboutMe.css';

import LogoViewer from './LogoViewer';
import abouts from '../Datas/AboutDatas';

//  About section content
const AboutMe = () => (
    <div className='about-me'>
        <div className='about-me-description'>

            <h3 className='discret' dangerouslySetInnerHTML={{ __html: abouts.quick_presentation }} />
            <h3 dangerouslySetInnerHTML={{ __html: abouts.my_current_state }} />
            <p className='discret' dangerouslySetInnerHTML={{ __html: abouts.complete_description }} />
        </div>

        <LogoViewer />
    </div>
);


export default AboutMe;