import React from "react";
import "./style.css";
import headshot from "./headshot.jpg";
import resume from "./ResumeKook.pdf"; 
import Section from "../Section"; 
import About from "../About"; 

function Intro() {
  return (
    <div>
        <header id="home" className="row header align-items-center">
            <div className="col-sm-8 intro">
                <h1>Jamie Kook</h1>
                <div className="line"></div>
                <h2>Web Developer</h2>
                <h5>801-718-6794</h5>
                <h5>kookjc6@gmail.com</h5>
                <h5><a target="_blank" href="https://www.linkedin.com/in/jamie-kook-b7816770/">LinkedIn</a> | <a target="_blank" href="https://github.com/JamieKook">Github</a> </h5>
                <div className="buttons m-2">
                    <button><a href={resume} download="JamieKookResume">Download Resume</a></button>
                </div>      
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center"><img className="img-fluid headshot" src={headshot}/></div>
        </header>
        <Section>
            <About/>
        </Section>
    </div>
  );
}

export default Intro;