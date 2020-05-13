import React from "react";
import ProjectCard from "./ProjectCard";
import Logo from "../asset/png/flutter1.png";
const AppDev = () => {
  return (
    <React.Fragment>
      <ProjectCard
        number="Flutter Project #1"
        details="A basic food delivery app, which also has a map integrated on it developed using flutter."
        link="https://github.com/balram0608/food-delivery-flutter"
        demolink="#"
        Logo={Logo}
      />
      <ProjectCard
        number="Flutter Project #2"
        details="A simple chatting app ui app based on flutter (Not finished yet)"
        link="https://github.com/balram0608/chatting-app-flutter"
        demolink="#"
        Logo={Logo}
      />

      <ProjectCard
        number={3}
        details="The backend server source code of chatting app"
        link="https://github.com/balram0608/chatting-app-flutter-backend"
        demolink="#"
        Logo={Logo}
      />
    </React.Fragment>
  );
};

export default AppDev;
