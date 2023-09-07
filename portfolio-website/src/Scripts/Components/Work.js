import { Component } from 'react';

import '../../Styles/Components/Work.css';

import ProjectsSlider from './ProjectsSlider';


//  Work section content
export default class Work extends Component {

    render() {
        return (
            <div className='work'>
                <ProjectsSlider />
            </div>
        );
    }
}
