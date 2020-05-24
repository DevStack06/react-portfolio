import React from "react";
import Blog from "./blog";
import Logo from "../asset/png/flutter1.png";
import "./blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <Blog
        number="Blog #1"
        details="Flutter SignIn and SignUp screen with dark mode||BloagApp part-1."
        link="https://github.com/balram0608/Blog-App"
        Medlink="https://medium.com/@balram0698/flutter-signin-and-signup-screen-with-dark-mode-bloagapp-part-1-9ea082bec82a"
        YoutubeLink="https://www.youtube.com/watch?v=T7evkslL650&t=1651s"
        Logo={Logo}
      />{" "}
    </div>
  );
};

export default Blogs;
