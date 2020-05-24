import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

const blogCard = (props) => {
  return (
    <React.Fragment>
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            // color: "#fff",
            height: "176px",
            background: `url(${props.Logo})center / cover`,
          }}
        ></CardTitle>
        <CardText>{props.details}</CardText>
        <CardActions border>
          <Button colored href={props.link}>
            GitHub
          </Button>

          <Button colored href={props.Medlink}>
            Medium
          </Button>
          <Button colored href={props.YoutubeLink}>
            YouTube
          </Button>
        </CardActions>
        {/* <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu> */}
      </Card>
    </React.Fragment>
  );
};

export default blogCard;
