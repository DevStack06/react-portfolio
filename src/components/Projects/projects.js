import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import WebDev from "./Webdevelopment";
import AppDev from "./AppDevelopment";
import MLProject from "./MachineLearning";
import "./project.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <WebDev />
          {/* <ReactProject /> */}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <AppDev />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <MLProject />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <h2>To be updated</h2>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="project">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Web-Development </Tab>
          <Tab>App Development</Tab>
          <Tab>Machine-Learning</Tab>
          <Tab>Miscellaneous</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
