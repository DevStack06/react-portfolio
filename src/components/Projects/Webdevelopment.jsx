import React from "react";
import ProjectCard from "./ProjectCard";
import Logo from "../asset/svg/react.svg";
const WebDev = () => {
  return (
    <React.Fragment>
      <ProjectCard
        number="React Project #1"
        details="A simple blog webApp powered by React.js,Express.js and MongoDB."
        link="https://github.com/balram0608/simple-Blog-WebApp"
        demolink="#"
        Logo={Logo}
      />
      <ProjectCard
        number="React Project #2"
        details="A simple burger builder app developed using react tutorial for reffrence ."
        link="https://github.com/balram0608/ReactBurgerApp"
        demolink="https://balram0608.github.io/ReactBurgerApp/"
        Logo={Logo}
      />
      <ProjectCard
        number="React Project #3"
        details="This bank is forked from  markpritchett  and I am updating it accoding to my use"
        link="https://github.com/balram0608/react-bank"
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

export default WebDev;
