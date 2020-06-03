import React from "react";
import Blog from "./blog";
import Logo from "../asset/png/flutter1.png";
import Node from "../asset/png/node.png";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import "./blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <Grid>
        <Cell col={12}>
          <div className="content">
            <div className="projects-grid">
              <Blog
                number="Blog #1"
                details="Flutter: Animated SignIn and Signup Screen Using Flutter || Blog App -01."
                link="https://github.com/balram0608/Blog-App"
                Medlink="https://medium.com/@balram0698/flutter-signin-and-signup-screen-with-dark-mode-bloagapp-part-1-9ea082bec82a"
                YoutubeLink="https://www.youtube.com/watch?v=T7evkslL650&t=1651s"
                Logo={Logo}
              />
              <Blog
                number="Blog #2"
                details="Building a simple REST API with NodeJs and ExpressJs || Blog App -02."
                link="https://github.com/balram0608/Blog-App"
                Medlink="https://medium.com/@balram0698/building-a-simple-rest-api-with-nodejs-and-express-blog-app-02-76d5715921e8"
                YoutubeLink="https://www.youtube.com/playlist?list=PLtIU0BH0pkKqypuOtDhcXZ4oATJfji49r"
                Logo={Node}
              />
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Blogs;
