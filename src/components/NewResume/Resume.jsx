import React from "react";
import Header from "./header";
import Summery from "./summery";
import Exprience from "./Exprience";
import Sections from "./Section";
const resume = () => {
  return (
    <article class="resume-wrapper text-center position-relative">
      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <header class="resume-header pt-4 pt-md-0">
          <div class="media flex-column flex-md-row">
            <img
              class="mr-3 img-fluid picture mx-auto"
              src="assets/images/profile.jpg"
              alt=""
            />
            <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
              <div class="primary-info">
                <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                  Balram Rathore
                </h1>
                <div class="title mb-3">Full Stack Developer</div>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="#">
                      <i
                        class="far fa-envelope fa-fw mr-2"
                        data-fa-transform="grow-3"
                      ></i>
                      balram0698@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        class="fas fa-mobile-alt fa-fw mr-2"
                        data-fa-transform="grow-6"
                      ></i>
                      +91 8319291358
                    </a>
                  </li>
                </ul>
              </div>

              <div class="secondary-info ml-md-auto mt-2">
                <ul class="resume-social list-unstyled">
                  <li class="mb-3">
                    <a href="https://www.linkedin.com/in/balram-rathore/">
                      <span class="fa-container text-center mr-2">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </span>
                      https://www.linkedin.com/in/balram-rathore/
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="https://github.com/balram0608">
                      <span class="fa-container text-center mr-2">
                        <i class="fab fa-github-alt fa-fw"></i>
                      </span>
                      https://github.com/balram0608
                    </a>
                  </li>
                  <li>
                    <a href="https://balram0608.github.io/balram-portfolio/">
                      <span class="fa-container text-center mr-2">
                        <i class="fas fa-globe"></i>
                      </span>
                      https://balram0608.github.io/balram-portfolio/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="resume-body p-5">
          <section class="resume-section summary-section mb-5">
            <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              Career Summary
            </h2>
            <div class="resume-section-content">
              <p class="mb-0">
                A senior undergraduate student on IIIT Naya Raipur. Doing my
                6-month final year internship on TCS CoE Lab as an SDE Intern.
                Know about App development, Web Development, and ML/DL.
                Interested in developing a rest API, Database connection, state
                management of the UI. I have done many projects on App and Web
                Development and also have a curiosity to explore GraphQl, Deno,
                and Go.
              </p>
            </div>
          </section>
          <div class="row">
            <div class="col-lg-9">
              <section class="resume-section experience-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Work Experience
                </h2>
                <div class="resume-section-content">
                  <div class="resume-timeline position-relative">
                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            SDE Intern
                          </h3>
                          <div class="resume-company-name ml-auto">
                            TCS DevOps CoE Lab,Kolkata
                          </div>
                        </div>
                        <div class="resume-position-time">Jan'20 - Present</div>
                      </div>
                      <div class="resume-timeline-item-desc">
                        <p>
                          UI development for a bank using React Js along with
                          the backend of Express Js. Both UI and backend is
                          connected through the rest API. The data will be
                          stored in MongoDB. It will be deployed on the GCP
                          Linux server.
                        </p>

                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              React
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Express
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Redux
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              MongoDB
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Webpack
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              HTML/CSS
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Docker
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              GCP
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            Flutter App Developer
                          </h3>
                          <div class="resume-company-name ml-auto">
                            Rathh,Hyderabad
                          </div>
                        </div>

                        <div class="resume-position-time">May - Oct'19</div>
                      </div>

                      <div class="resume-timeline-item-desc">
                        <p>
                          UI/Ux development using Flutter. Connecting the UI to
                          the rest API which is developed using Django Rest
                          Framework. Used GCP for the deployment of the rest
                          server and Github for code integration.
                        </p>
                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Flutter
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Block-Management
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Django
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              GCP
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Github
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              SQLite3
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>

                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            Web Developer
                          </h3>
                          <div class="resume-company-name ml-auto">
                            Prayas Residential School,Raipur
                          </div>
                        </div>

                        <div class="resume-position-time">Jul - Dec'18</div>
                      </div>

                      <div class="resume-timeline-item-desc">
                        <p>
                          Developed an official website for school, using the
                          Django server with a jinja2 template, used HTML & CSS
                          in the front-end, whereas backend server connected
                          with the sqlite3 database.
                        </p>

                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Django
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              JavaScript
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              HTML/CSS
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Jinja2
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Jquery
                            </span>
                          </li>

                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              SQLite3
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              <section class="resume-section experience-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Projects
                </h2>
                <div class="resume-section-content">
                  <div class="resume-timeline position-relative">
                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            Plant Leaf Disease analysis using android app
                          </h3>
                          <div class="resume-company-name ml-auto">
                            Asst. Prof. Vivek Tiwari
                          </div>
                        </div>

                        <div class="resume-position-time">Jul - Dec'19</div>
                      </div>

                      <div class="resume-timeline-item-desc">
                        <p>
                          Deployed a VGG-13 Deepnet model in the android app for
                          plant leaf disease detection, using the TensorFlow
                          Lite along with Keras for better model prediction.
                        </p>

                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Tensorflow Lite
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Android Studio
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Python
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Java
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>

                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            Removing class label noise using Adaboost.
                          </h3>
                          <div class="resume-company-name ml-auto">
                            Asst. Prof. Vivek Tiwari
                          </div>
                        </div>

                        <div class="resume-position-time">Jan - May'19</div>
                      </div>

                      <div class="resume-timeline-item-desc">
                        <p>
                          Finding the class label noise with the help of a
                          machine learning model(Adaboost), So we can increase
                          the performance of the model for better prediction
                          accuracy.
                        </p>

                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Python
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Machine Leaning
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Jupyter-Notebook
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Colab
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">
                            Secure communication in Internet of Drone.
                          </h3>
                          <div class="resume-company-name ml-auto">
                            Asst. Prof. Ruhul Amin
                          </div>
                        </div>

                        <div class="resume-position-time">Jul - Dec'18</div>
                      </div>

                      <div class="resume-timeline-item-desc">
                        <p>
                          A protocol designed for IoD devices, to make a secure
                          connection between the drone and the receiving server.
                          It was based on a Hashing technique that will encrypt
                          the data before sending it to the server.
                        </p>

                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                          Technologies used:
                        </h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              CryptoGraphy
                            </span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">
                              Hashing
                            </span>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>
            <div class="col-lg-3">
              <section class="resume-section skills-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Skills &amp; Tools
                </h2>
                <div class="resume-section-content">
                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
                    <ul class="list-unstyled mb-4">
                      <li class="mb-2">
                        <div class="resume-skill-name">Flutter</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 70%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">React</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 70%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">JavaScript</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 75%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-2">
                        <div class="resume-skill-name">Android Studio</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 70%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">HTML/CSS</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 80%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <div class="resume-skill-name">Python/Django</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 75%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">Express</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 92%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">Database(MongoDB)</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 50%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Others</h4>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <span class="badge badge-light">Jenkins</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Docker</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Git</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Machine Learning</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">GCP</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">C++</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Java</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section class="resume-section education-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Education
                </h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="resume-degree font-weight-bold">
                        B.Tech. in Computer Science and Engineering
                      </div>
                      <div class="resume-degree-org">IIIT Naya Raipur</div>
                      <div class="resume-degree-time">
                        2016 - 2020 (8.58/10)
                      </div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        Higher Secondary School
                      </div>
                      <div class="resume-degree-org">
                        Saraswati Shishu Mandir
                      </div>
                      <div class="resume-degree-time">2013- 2015 (87.2%)</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">
                        High School
                      </div>
                      <div class="resume-degree-org">
                        Saraswati Shishu Mandir
                      </div>
                      <div class="resume-degree-time">2011- 2013 (90.33%)</div>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="resume-section reference-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  ACHIEVEMENTS
                </h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled resume-awards-list">
                    <li class="mb-2 pl-4 position-relative">
                      <i
                        class="resume-award-icon fas fa-trophy position-absolute"
                        data-fa-transform="shrink-2"
                      ></i>
                      <div class="resume-award-name">Scholarship</div>
                      <div class="resume-award-desc">
                        Provided Scholarship by the home institute (IIIT-NR) for
                        Academic Performance for 2 ConsecutiveYears.
                      </div>
                    </li>
                    <li class="mb-0 pl-4 position-relative">
                      <i
                        class="resume-award-icon fas fa-trophy position-absolute"
                        data-fa-transform="shrink-2"
                      ></i>
                      <div class="resume-award-name">Tcs Codevita-8</div>
                      <div class="resume-award-desc">
                        Secured Rank 335 from total participation of 55,654 in
                        Codevita 8 round 1.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="resume-section language-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Language
                </h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled resume-lang-list">
                    <li class="mb-2">
                      <span class="resume-lang-name font-weight-bold">
                        English
                      </span>
                      <small class="text-muted font-weight-normal">
                        (Professional)
                      </small>
                    </li>
                    <li class="mb-2 align-middle">
                      <span class="resume-lang-name font-weight-bold">
                        Hindi
                      </span>
                      <small class="text-muted font-weight-normal">
                        (Native)
                      </small>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="resume-section interests-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Interests
                </h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled">
                    <li class="mb-1">App Development</li>
                    <li class="mb-1">Web Development</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default resume;
