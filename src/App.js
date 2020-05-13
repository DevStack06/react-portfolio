import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/balram-portfolio/"
              >
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/balram-portfolio/resume">Resume</Link>
              <Link to="/balram-portfolio/aboutme">About Me</Link>
              <Link to="/balram-portfolio/projects">Projects</Link>
              <Link to="/balram-portfolio/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/balram-portfolio/resume">Resume</Link>
              <Link to="/balram-portfolio/aboutme">About Me</Link>
              <Link to="/balram-portfolio/projects">Projects</Link>
              <Link to="/balram-portfolio/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
