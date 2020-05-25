import React from "react";
import Header from "./header";
import Summery from "./summery";
import Exprience from "./Exprience";
const resume = () => {
  return (
    <article class="resume-wrapper text-center position-relative">
      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <Header />
        <div class="resume-body p-5">
          <Summery />
          <div class="row">
            <div class="col-lg-9">
              <section class="resume-section experience-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  Work Experience
                </h2>
                <div class="resume-section-content">
                  <div class="resume-timeline position-relative">
                    <Exprience />
                  </div>
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
