import React from "react";
import "../../assets/styles/style.css";
import "../../assets/styles/animate.css";

function Contact() {

    return (
<body>

<div className="container animated fadeInDown">

        <div className="row">
            <div className="col-md-12"><h2>Contact Information</h2></div>
        </div>

        <div className="row">
          <div className="col-md-12">

            <br />
            
            <p><strong>Email:</strong> kbetlach@gmail.com</p>

            <p><strong>Mobile phone:</strong> 1(507)-469-5025</p>

            <p><strong><a href="https://www.linkedin.com/in/kyle-betlach" target="_blank" rel="noopener noreferrer">LinkedIn <i className="fab fa-linkedin-in"></i></a></strong></p>

            <p><strong><a href="https://github.com/kbetlach" target="_blank" rel="noopener noreferrer">GitHub <i className="fab fa-github"></i></a></strong></p>

            <p><strong><a href="assets/resume.pdf" target="_blank">Resume <i className="fas fa-file"></i></a></strong></p>

            <br />

            <p>I welcome any and all communication through any of these platforms, and greatly look forward to connecting with you!</p>
       
          </div>
        </div>


</div>

<br/>

<div className="row">
    <div className="col-md-12">
        <div className="footer-margin">
            <footer className="card-footer bg-#666666 footer-font-style text-#ffffff footer-position">2020 - Kyle Betlach ©
            </footer>
        </div>
    </div>
</div>    
</body>
    )
}

export default Contact;