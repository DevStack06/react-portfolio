import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px", marginBottom: "0px" }}>
            {this.props.jobName}
          </h4>
          <h6 style={{ marginTop: "0px" }}>{this.props.companyname}</h6>
          <p>{this.props.jobDescription}</p>
          <p>
            <b>Stack Used: </b> {this.props.stack}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
