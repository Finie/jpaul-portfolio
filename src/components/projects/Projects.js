import React from 'react'
import ProjectItem from '../project_item/ProjectItem'

import {projectData} from './data'
import  './project.css'


function Project(){
    return(
        <div id="project" className="project-container">
            <h1>{projectData.title}</h1>
            <div className="project-holder">
                {projectData.data.map((item)=><ProjectItem data={item}/>)}
            </div>
        </div>
    );
}


export default Project;