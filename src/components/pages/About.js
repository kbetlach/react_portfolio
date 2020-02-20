import React from "react";
import "../../assets/styles/style.css";
import "../../assets/styles/animate.css";
import Header from '../Header'

function About() {

    return (
<body>

    <Header />

    <div className="container animated fadeInLeft">
        <div className="row">
            <div className="col-md-12"><h2>About Me</h2></div>
        </div>

      <br/>

        <div className="row">
            <div className="col-md-12">
                <img src={require("../../assets/images/kyle.jpg")} className="img-responsive" alt="kyle headshot" id="kyle"></img>
                <p>Hi! Thank you for stopping by my portfolio! My name is Kyle Betlach, and I'm currently a student enrolled in the University of Minnesota computer coding bootcamp. I have bachelor's degrees in anthropology and religious studies from Hamline Unversity, 
                    and have spent my working life bouncing around between the natural foods industry, archaeology, and board game distribution. I decided to change direction and pursue full stack development.
                    I chose to get into coding as a way to pursue my interest in technology, in addition to having an outlet to flex my creative muscle. The bootcamp has given me a strong proficiency in HTML5, CSS, JavaScript, the MERN stack, and responsive web design.
                </p>
            
                <p>In my freetime, my hobbies include tabletop board gaming, watching the Minnesota United soccer team, listening to music, and spending time with friends and my girlfriend Ashley. I'm a lifelong Minnesotan, and a proud resident of Saint Paul.</p>
            
                <p>I was really drawn to computer coding because of its ever-evolving nature, and how much there is to learn. I hope that over time my portfolio will be ever-evolving as well, reflecting the many steps I will be taking in this new pursuit.  
                    What I hope you'll find in my portfolio is my dedication to creativity, as well as my passion, drive, and constant desire to improve.
                </p>

                <p>Please click my contact page to see the various ways to reach me. Thanks again!</p>
            </div>
        </div>
    </div>
</body>
)
}

export default About;