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
            <h3 style={{ marginBottom: "0px" }}>Skills</h3>
            <Skills skill="Flutter" progress={75} />
            <Skills skill="React" progress={50} />
            <Skills skill="ExpressJs" progress={50} />
            <Skills skill="MongoDB" progress={25} />
            <Skills skill="Django" progress={40} />
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
              jobName="SDE Intern  "
              companyname="TCS DevOps CoE Lab,Kolkata"
              stack="React Js,Express Js,MongoDB,Docker,GCP Linux server,Jenkins."
              jobDescription="Developing a UI using react, and connecting it to the backend Express js using rest API along with the Mongo DB database which is authenticated using the JWT token, and managing the UI state using redux at the end it will be deploy on the GCP linux server."
            />

            <Experience
              startYear={"May"}
              endYear={"Oct'19"}
              jobName="Flutter App Developer Intern "
              companyname="Rathh,Hyderabad"
              stack="Flutter,Django Rest Framework,GCP,Firebase,Github."
              jobDescription="Dynamically rendering the components according to rest API content developed using the Django rest framework, in a team of  6 members for the startup, while using Github for the code integration, and firebase for authenticating the user. "
            />
            <Experience
              startYear={"Jul"}
              endYear={"Dec'18"}
              jobName="Web Developer "
              companyname="Prayas Resential School,Raipur"
              stack="Jquey,Django,Jinja2 Template,HTML,CSS."
              jobDescription=" Developed an official website for school, using the Django server with a jinja2 template, used HTML & CSS in the front-end, whereas backend server connected with the sqlite3 database."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Projects</h2>
            <Project
              startYear={"Jul"}
              endYear={"Dec'19"}
              title="Plant Leaf Disease analysis using android app"
              profname="Asst. Prof. Vivek Tiwari"
              tool="Tensorflow Lite,Android Studio,Python,Java."
              Description=" Integrated a deep learning model in the android app for plant leaf disease detection, using the TensorFlow Lite along with VGG-13 for better model prediction."
            />
            <Project
              startYear={"Jan"}
              endYear={"May'19"}
              title="Removing class label noise using Adaboost."
              profname="Asst. Prof. Vivek Tiwari"
              tool="Python,Jupyter Notebook,Sklearn."
              Description="Finding the class label noise with help of machine learning model(Adaboost), So we can increse the performance of model for better prediction accuracy."
            />
            <Project
              startYear={"Jul"}
              endYear={"Dec'18"}
              title="Secure communication in Internet of Drone."
              profname="Asst. Prof. Ruhul Amin"
              tool="cryptography,Hashing"
              Description="Protocol designed for IoD devices,to make secure connection between drone and the recieving server. Designed a Hashing technique that will encrypt the data before sending to the server."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2020}
              degree="B.Tech (8.58/10 CGPA)"
              schoolName="IIIT Naya Raipur"
              schoolDescription="International Institute of Information Technology, Naya Raipur or Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur is an autonomous institute of higher education in Naya Raipur, Chhattisgarh, India."
            />

            <Education
              startYear={2013}
              endYear={2015}
              degree="Higher Secondary school (87.2/100%)"
              schoolName="Saraswati Shishu Mandir, Akaltara (CGBSE)"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education
              startYear={2011}
              endYear={2013}
              degree="High School (90.33/100%)"
              schoolName="Saraswati Shishu Mandir, Pamgarh (CGBSE)"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
