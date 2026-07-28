import '../../Styles/Components/AboutMe.css';

import LogoViewer from './LogoViewer';
import abouts from '../Datas/AboutDatas';

//  About section content
const AboutMe = () => (
    <div className='about-me'>
        <div className='about-me-description'>

            <h2 className='discret' dangerouslySetInnerHTML={{ __html: abouts.quick_presentation }} />
            <h4 dangerouslySetInnerHTML={{ __html: abouts.my_current_state }} />
            <hr />
            <p className='discret' dangerouslySetInnerHTML={{ __html: abouts.complete_description }} />
            <br />
            <p id='job-seeking' dangerouslySetInnerHTML={{ __html: abouts.job_seeking }} />
        </div>

        <LogoViewer />
    </div>
);


export default AboutMe;