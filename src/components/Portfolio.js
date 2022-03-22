import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { PortfolioProjects } from "./helperComponents/PortfolioProjects";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    color: theme.palette.primary.main,
    zIndex: 1,
    fontWeight: "bold",
    paddingTop: "30px",
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      backgroundColor: "inherit",
      zIndex: "-1",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transformOrigin: "top left",
      transform: "skewY(354deg)",
    },
    [theme.breakpoints.up("xl")]: {
      paddingBottom: 87,
    },
  },
  header: {
    color: theme.palette.primary.main,
    paddingBottom: 28,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "transparent",
  },
  typography: {
    color: theme.palette.primary.main,
  },
}));

export const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} id="Portfolio">
      <Grid item xs={12}>
        <Typography variant={"h3"} className={classes.header}>
          Portfolio
        </Typography>
      </Grid>
      <Grid container item justify="space-evenly">
        <PortfolioProjects />
      </Grid>
    </Grid>
  );
};
