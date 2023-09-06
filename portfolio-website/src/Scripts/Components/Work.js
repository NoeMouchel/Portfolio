import { Component } from 'react';
import { projects } from '../Datas/Projects.js';

import '../../Styles/Components/Work.css';

import ProjectsSlider from './ProjectsSlider';
import ProjectViewer from './ProjectViewer';


//  Work section content
export default class Work extends Component {

    render() {
        return (
            <div className='work'>
                <ProjectsSlider>
                    {
                        projects.map((data, i) => {
                            return (
                                <ProjectViewer key={i} data={data}></ProjectViewer>)
                        })
                    }
                </ProjectsSlider>
            </div>
        );
    }
}
