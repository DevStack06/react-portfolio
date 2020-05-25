import React from "react";
const section = (props) => {
  return (
    <section class="resume-section experience-section mb-5">
      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
        {props.title}
      </h2>
      <div class="resume-section-content">
        <div class="resume-timeline position-relative">{props.children}</div>
      </div>
    </section>
  );
};

export default section;
