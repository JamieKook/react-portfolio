import React from "react";
import "./style.css";
import Container from "../Container";


function About() {
  return (
    <div className="about row">
        <div className="overlay d-flex align-items-center">
            <Container>
                <p>Web Developer coming from a background in science education and research. Experienced in creating a <a href="http://www.surgeuniverse.com/" target="_blank">web-hosted educational game</a>  that used theory and data-driven feedback in its effectiveness and clear presentation of information. Recently earned a certificate in Full-Stack Web Development from Vanderbilt University, acquiring a functional knowledge of HTML, CSS, Javascript, React.js, Node.js, and more. A great collaborator and communicator, having used my organizational and critical thinking skills to move projects forward both as a leader and as a team member. A quick learner who is always eager to tackle difficult problems and enjoys puzzling through a new challenge. Looking forward to developing new web technologies, utilizing my background and technical skills, and adapting along the way.</p>
                <button className="btn btn-light"><a href="#portfolio">View my work</a></button>
            </Container>
        </div>
    </div>
  );
}

export default About;