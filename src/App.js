import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Index from "./components/pages/Index";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>      
        
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
