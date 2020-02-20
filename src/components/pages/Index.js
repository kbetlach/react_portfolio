import React from "react";
import "../../assets/styles/style.css";
import "../../assets/styles/animate.css";


function Index() {

    const styles = {
        containerStyle: {
          background: "transparent",
          border: "hidden"
        }
      };

    return (
<body>

<br />
<br />

    <div style={styles.containerStyle} className="container animated fadeIn">

<br />
<br />

            <div className="row">
                <div className="col-md-12"><h1>Kyle Betlach</h1></div>
            </div>

<br />

            <div className="row">
                <div className="col-md-12"><h3>Full Stack Web Developer</h3></div>
            </div>
            
<br />

            <div className="row">
                <div className="col-md-4" id="cover-bio"><h3><a href="about">About Me</a></h3></div>
                <div className="col-md-4" id="cover-portfolio"><h3><a href="gallery">Project Gallery</a></h3></div>
                <div className="col-md-4" id="cover-contact"><h3><a href="contact">Contact</a></h3></div>
            </div>

    </div>
</body>
    )
    }

    export default Index;