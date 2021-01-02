import React from 'react'

import './button.css'


function Button(props){

    return(
        <div className="button-container">
           <a rel="noreferrer" target="_blank" href={props.url}>{props.children}</a> 
        </div>
    );
}

export default Button;