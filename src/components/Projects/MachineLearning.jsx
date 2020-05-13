import React from "react";
import ProjectCard from "./ProjectCard";
import Logo from "../asset/png/ml1.png";
const MLProject = () => {
  return (
    <React.Fragment>
      <ProjectCard
        number="Machine Learning Project #1"
        details="Removing class label noise using Adaboost."
        link="https://github.com/balram0608/class-label-noise-detection"
        demolink="#"
        Logo={Logo}
      />
      <ProjectCard
        number="Machine Learning Project #2"
        details="Machine learning Lab Task Repository"
        link="https://github.com/balram0608/machine-learning-lab"
        demolink="#"
        Logo={Logo}
      />
    </React.Fragment>
  );
};

export default MLProject;
