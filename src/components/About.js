import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    color: theme.palette.secondary.main,
    zIndex: 1,
    fontWeight: "bold",
    paddingTop: "15px",
    paddingBottom: "50px",
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      background: "linear-gradient(182deg,#0e2e5de6,#0e2e5d, #33a2b4)",
      zIndex: "-1",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transformOrigin: "top left",
      transform: "skewY(354deg)",
    },
    "& .MuiPaper-outlined": {
      border: "none",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: 115,
    },
    [theme.breakpoints.up("xxl")]: {
      height: 320,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: "80%",
    margin: "40px auto 0",
    backgroundColor: "transparent",
  },
  aboutParagraph: {
    color: theme.palette.secondary.main,
    border: "none",
  },
  keywords: {
    color: "#7cfff7",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="About">
      <Typography variant={"h3"}>About Me</Typography>
      <Paper variant={"outlined"} className={classes.paper}>
        <Typography
          variant={"h6"}
          paragraph={true}
          component={"p"}
          align={"left"}
          className={classes.aboutParagraph}
        >
          Hello! My name is Michael Williamson. I am a Full Stack Developer
          specializing in creating sleek, fast, User Interfaces using
          <span className={classes.keywords}> React.js. </span>I also work with
          a variety of Backend and Database technologies including
          <span variant="h4" className={classes.keywords}>
            {" "}
            Java, Node.js, SQL,{" "}
          </span>{" "}
          and
          <span variant="h4" className={classes.keywords}>
            {" "}
            MongoDB.{" "}
          </span>
          {"  "}
          Along with being a developer I love to Free Dive, Play guitar, Learn
          about history as well as many other things.
        </Typography>
      </Paper>
    </div>
  );
};
