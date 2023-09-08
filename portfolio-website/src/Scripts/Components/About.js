import '../../Styles/Components/About.css';

import LogoViewer from './LogoViewer';

//  About section content
const About = () => (
    <div className='about'>
        <div className='about-description'>
            <h1>Hi I'm Noé.</h1>
            <p>
                A 4th year game programmer student at <b>ISART Digital Paris</b>.<br />
                I am also working on multiple personal projects that are yet to be finished! Enjoy your visit on my portfolio, hope you'll like my projects!
            </p>
        </div>

        <LogoViewer />
    </div>
);


export default About;