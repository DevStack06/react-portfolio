import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/landingpage";
import AboutMe from "./About/aboutme";
import Contact from "./Contact/contact";
import Projects from "./Projects/projects";
import Resume from "./Resume/resume";
import Blogs from "./Blog/blogs";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/blogs" component={Blogs} />
  </Switch>
);

export default Main;
