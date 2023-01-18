import React from "react";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Recommendations from "./routes/Recommendations";
import {
  Websites,
  LettersRecommendation,
} from "../src/components/componentsData/projectData";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/contact">
            <Contact contact={Websites} />
          </Route>
          <Route exact path="/projects">
            <Projects websites={Websites} />
          </Route>
          <Route exact path="/recommendations">
            <Recommendations recommendations={LettersRecommendation} />
          </Route>
          <Route exact path="/">
            <Home websites={Websites} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
