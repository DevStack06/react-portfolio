import React from "react";
const header = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default header;
