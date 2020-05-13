import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Project from "./project";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src="" alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Balram Rathore</h2>
            <h4 style={{ color: "grey" }}>SDE Intern at TCS CoE Lab</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              To work for an organization in the field of Software development
              which allows me to furnish my skills and grow along with the
              organization objective.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"Jan"}
              endYear={"jul'20"}
              jobName="SDE Intern at TCS CoE Lab "
              jobDescription="Developing a UI using react, and connecting it to the backend Express js using rest API along with the Mongo DB database which is authenticated using the JWT token, and managing the UI state using redux at the end it will be deploy on the GCP linux server."
            />

            <Experience
              startYear={"May"}
              endYear={"Oct'19"}
              jobName="Flutter App Developer Intern at Rathh"
              jobDescription="Dynamically rendering the components according to rest API content developed using the Django rest framework, in a team of  6 members for the startup, while using Github for the code integration, and firebase for authenticating the user. "
            />
            <Experience
              startYear={"Jul"}
              endYear={"Dec'18"}
              jobName="Web Developer"
              jobDescription=" Developed an official website for school, using the Django server with a jinja2 template, used HTML & CSS in the front-end, whereas backend server connected with the sqlite3 database."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Projects</h2>
            <Project
              startYear={"Jul"}
              endYear={"Dec'19"}
              title="Plant Leaf Disease analysis "
              Description=" Integrated a deep learning model in the android app for plant leaf disease detection, using the TensorFlow Lite along with VGG-13 for better model prediction.."
            />

            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2020}
              schoolName="IIIT Naya Raipur"
              schoolDescription="International Institute of Information Technology, Naya Raipur or Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur is an autonomous institute of higher education in Naya Raipur, Chhattisgarh, India."
            />

            <Education
              startYear={2013}
              endYear={2015}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
