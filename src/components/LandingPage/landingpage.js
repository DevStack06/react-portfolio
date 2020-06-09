import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./landing.css";
class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img src="" alt="avatar" className="avatar-img" /> */}

            <div className="banner-text" id="bannerId">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                React | Flutter | JavaScript | NodeJS | Express | MongoDB |
                Redux | HTML/CSS
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/balram-rathore/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/DevStack06"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@devstack06"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-medium" aria-hidden="true"></i>
                  {/* <i className="fa fa-medium" aria-hidden="true" /> */}
                </a>
                {/* Freecodecamp */}
                {/* <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCE9YNto5Fc8u7DdOTuCm8rw"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
