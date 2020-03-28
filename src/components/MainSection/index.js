import React from "react";
import "./style.css";
import Intro from "../Intro"; 
import Portfolio from "../Portfolio"; 
import Education from "../Education"; 
import Skills from "../Skills"; 
import Contact from "../Contact"; 

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MainSection(props) {
  return (
      <div className="main">
        <Intro/>
        <Portfolio/>
        <Education/>
        <Skills/>
        <Contact/>
      </div>
      
  );
}

export default MainSection;
