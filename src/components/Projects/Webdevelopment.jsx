import React from "react";
import ProjectCard from "./ProjectCard";
import Logo from "../asset/svg/react.svg";
const ReactProject = () => {
  return (
    <React.Fragment>
      <ProjectCard
        number={1}
        details="just title of the project"
        link="#"
        demolink="#"
        Logo={Logo}
      />
      <ProjectCard
        number={2}
        details="just title of the project"
        link="#"
        demolink="#"
        Logo={Logo}
      />
      <ProjectCard
        number={3}
        details="just title of the project"
        link="#"
        demolink="#"
        Logo={Logo}
      />
      {/* <ProjectCard
        number={3}
        details="just title of the project"
        link="#"
        demolink="#"
        Logo={Logo}
      /> */}
    </React.Fragment>
  );
};

export default ReactProject;
