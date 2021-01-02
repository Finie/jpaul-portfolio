import React from 'react'
import Button from '../Button/Button'

import './projectitem.css'

function ProjectItem(props){
    return(
        <div className="project-item-container">
            <div className="button-holder">
                <div className="button-spacer"/>
                <Button url={props.data.document_url}>View</Button>
            </div>


            <div className="content-holder">
            <header>{props.data.documet_type}</header>
            <a rel="noreferrer" target="_blank" href={props.data.document_url}>{props.data.document_title}</a>
            <p>{props.data.document_body}</p>
            </div>


        </div>
    )
}



export default ProjectItem;