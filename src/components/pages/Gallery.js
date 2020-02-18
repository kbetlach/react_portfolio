import React from "react";
import "../../assets/styles/style.css";
import "../../assets/styles/animate.css";

function Gallery() {
    return (

<body>

        <div className="container animated fadeInRight">
        <div className="row">
            <div className="col-md-12"><h2>Project Gallery</h2></div>
        </div>
        
        <div className="row">
            <div className="col-md-12">
                <p>Welcome! To view code repositories, click the <i className="fab fa-github"></i> icon. To see the deployed project, click the <i className="fas fa-external-link-alt"></i> icon.</p>
                <p>ReadMe files are available in the GitHub code repositories. These files introduce and detail each project as well as the skills and technologies utilized in their creation.</p>
            </div>
        </div>

<br/>

    <div className="row">
        <div className="col-md-6"><img src={require("../../assets/images/ffdb.jpg")} alt="gallery-images" className="responsive" id="ffdb"></img>
            <div className="label1">Fantasy Football Database</div>
            <div className="row">
            <a href="https://jacobrosenbaum.github.io/FantasyFootball/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
            <a href="https://github.com/JacobRosenbaum/FantasyFootball.github.io" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>

        <div className="col-md-6"><img src={require("../../assets/images/msts.jpg")} alt="gallery-images" className="responsive" id="msts"></img>
            <div className="label1">Mantis Shrimp Tutoring Service</div>
            <div className="row">
            <a href="https://mantisshrimp.herokuapp.com/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
            <a href="https://github.com/BenHonken/mantis-shrimp" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>
    </div>

<br/>

    <div className="row">
        <div className="col-md-6"><img src={require("../../assets/images/weather.jpg")} alt="gallery-images" className="responsive" id="weather"></img>
            <div className="label1">Weather Dashboard</div>
            <div className="row">
            <a href="https://kbetlach.github.io/weather_dashboard/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
            <a href="https://github.com/kbetlach/kbetlach.github.io/tree/master/weather_dashboard" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>

        <div className="col-md-6"><img src={require("../../assets/images/lotr.jpg")} alt="gallery-images" className="responsive" id="lotr"></img>
            <div className="label1">Lord of the Rings Trivia Quiz</div>
            <div className="row">
                <a href="https://kbetlach.github.io/lotr_quiz/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
                <a href="https://github.com/kbetlach/kbetlach.github.io/tree/master/lotr_quiz" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6"><img src={require("../../assets/images/burger.jpg")} alt="gallery-images" className="responsive" id="burger"></img>
            <div className="label1">Eat-Da-Burger!</div>
            <div className="row">
                <a href="http://eat-da-burger-kb.herokuapp.com/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
                <a href="https://github.com/kbetlach/da_burger" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>

        <div className="col-md-6"><img src={require("../../assets/images/password.jpg")} alt="gallery-images" className="responsive" id="password"></img>
            <div className="label1">Password Generator</div>
            <div className="row">
                <a href="https://kbetlach.github.io/password_generator/" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fas fa-external-link-alt"></i></div></a>
                <a href="https://github.com/kbetlach/kbetlach.github.io/tree/master/password_generator" target="_blank" rel="noopener noreferrer"><div className="col-md-6 label2"><i className="fab fa-github"></i></div></a>
            </div>
        </div>

    </div>

</div>
 
</body>
)
}

export default Gallery;