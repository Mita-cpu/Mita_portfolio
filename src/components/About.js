import React from 'react';
import "../styles/About.css"
import FirstPic from "../assets/slide1.jpg";

function About () {
    return (
        <div className="about section" id="about" >
        <div className="max-width">
            <h2 className="title"> About me</h2>
            <div className="about-content">
                <div className="column left">

                    <img src={FirstPic}/>
                </div>
                <div className="column right">
                    <div className="text">I'm Mita and I'm a <span className="typing-2"> Software Developer</span></div>
                    <div className="text">My education</div>
                    <p> I have graduated with a Bachelor of Science (Biological Sciences) from the University of the Witwatersrand. I have advanced my knowledge in Programming Coding in variety of 
                        language at GirlCode which is a registered NPO aimed at Upskillin woman with tech skills.       
                       </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    <div className="text">My Skills</div>
                    <p>I am proficient in JavaScript,Angular ,Node.js , CSS, HTML and Python. Of these programming languages, I feel most comfortable working with , Angular and JavaScript.  I worked on projects  mainly with Angular to create applications that worked across multiple platforms. </p>
                    
                </div>
            </div>
            </div>
        </div>
    
    )
}

export default About;