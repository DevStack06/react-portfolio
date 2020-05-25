import React from "react";
const exprience = () => {
  return (
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
          UI development for a bank using React Js along with the backend of
          Express Js. Both UI and backend is connected through the rest API. The
          data will be stored in MongoDB. It will be deployed on the GCP Linux
          server.
        </p>

        <h4 class="resume-timeline-item-desc-heading font-weight-bold">
          Technologies used:
        </h4>
        <ul class="list-inline">
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">React</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">Express</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">Redux</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">MongoDB</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">Webpack</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">HTML/CSS</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">Docker</span>
          </li>
          <li class="list-inline-item">
            <span class="badge badge-primary badge-pill">GCP</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default exprience;
