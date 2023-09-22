import '../../Styles/Components/AboutMe.css';

import LogoViewer from './LogoViewer';

//  About section content
const AboutMe = () => (
    <div className='about-me'>
        <div className='about-me-description'>
            <h3 className='discret'>Hi I'm Noé !</h3>
            <h3>A game programmer student at <b>ISART Digital Paris</b>.
                <br />

                I love making games and coding.
            </h3>

            <p>
                <i className='discret'>
                    Enjoy your visit on my portfolio, hope you'll like my projects!
                </i>
            </p>
        </div>

        <LogoViewer />
    </div>
);


export default AboutMe;