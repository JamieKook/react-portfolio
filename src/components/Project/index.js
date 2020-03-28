import React from "react";

function Project(props) {

  return (
    <div className="border-bottom border-dark m-2">
        <h2><a className= "link" target="_blank" href={props.linkapp}><span className="title">{props.title}</span></a></h2>
        <i className={props.icon}></i>
        <p className="description m-0">{props.shortd}</p>
        <button id={props.id} onClick={()=>props.handleLearnMoreClick(props.id)} className="btn btn-dark m-1 portbtn"><a href="#portfolio" className="text-white">Learn More</a></button>
    </div>    
);
}

export default Project;
