import React, {useState} from "react";
import "./style.css";
import Section from "../Section"; 
import schoolList from "./schools.json"; 
import EdCol from "../EdCol"; 



function Education() {

const [schools, setSchools]= useState(schoolList); 

  return (
      <Section>
        <div id="education">
            <h1>Education</h1>
            <div className="row">
            {schools.map(school => (
                <EdCol
                    key={school.id}
                    image={school.image}
                    degree={school.degree}
                    name={school.name}
                    p1={school.p1}
                    p2={school.p2}
                    p3={school.p3}
                    year= {school.year}
                />
                ))}
            </div>
        </div>
      </Section>
    
  );
}

export default Education;