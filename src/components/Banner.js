import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Fade,
} from "@material-ui/core";
import { BannerProjects } from "../components/helperComponents/BannerProjects";
import { ResourcesComponent } from "./helperComponents/ResourcesComponent";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "90vh",
      backgroundImage: `url(/media/bg-image.jpg)`,
      backgroundPosition: "center",
      position: "relative",
      [theme.breakpoints.up("tablet")]: {
        minHeight: 526,
      },
      [theme.breakpoints.up("xl")]: {
        minHeight: 739,
      },
      [theme.breakpoints.up("xxl")]: {
        minHeight: 880,
      },
    },
    titleTextGroup: {
      marginTop: 50,
      [theme.breakpoints.up("sm")]: {
        marginTop: 100,
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 7,
      },
      [theme.breakpoints.up("tablet")]: {
        marginTop: 100,
      },
      color: theme.palette.primary.main,
    },
    titleTextHeader: {
      [theme.breakpoints.up("xxl")]: {
        fontSize: "5.75rem",
      },
    },
    titleTextSubHeader: {
      [theme.breakpoints.up("xxl")]: {
        fontSize: "1.8rem",
      },
    },
  })
);

const TitleText = props => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.titleTextGroup}>
      <Typography variant={"h2"} classes={{ h2: classes.titleTextHeader }}>
        Michael Williamson
      </Typography>
      <Typography variant={"h6"} classes={{ h6: classes.titleTextSubHeader }}>
        JavaScript Developer
      </Typography>
    </div>
  );
};

export const Banner = props => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignContent={"center"}
      justify={"flex-start"}
      direction={"column"}
    >
      <Grid item>
        <Fade in={true} timeout={2000}>
          <TitleText />
        </Fade>
      </Grid>
      <Grid item>
        <BannerProjects />
      </Grid>
      <Grid item>
        <ResourcesComponent />
      </Grid>
    </Grid>
  );
};
