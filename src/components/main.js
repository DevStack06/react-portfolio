import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./Projects/projects";
import Resume from "./Resume/resume";

const Main = () => (
  <Switch>
    <Route exact path="/balram-portfolio/" component={LandingPage} />
    <Route path="/balram-portfolio/aboutme" component={AboutMe} />
    <Route path="/balram-portfolio/contact" component={Contact} />
    <Route path="/balram-portfolio/projects" component={Projects} />
    <Route path="/balram-portfolio/resume" component={Resume} />
  </Switch>
);

export default Main;
