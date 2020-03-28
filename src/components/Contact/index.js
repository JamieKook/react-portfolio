import React from "react";
import "./style.css";
import Section from "../Section"; 

function Contact() {
  return (
      <Section>
        <div className="p-5 d-flex align-items-center justify-content-center" id="contact">
            <div>
                <h2 className="p-4">Let's create something together</h2> <br/>
                <h4><i className="fas fa-phone-alt my-3 mx-1"></i>801-718-6794</h4> 
                <h4><i className="fas fa-envelope my-3 mx-1"></i>kookjc6@gmail.com</h4>
            </div>
        </div>
      </Section>

      
  );
}

export default Contact; 