import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import projects from "../../projectsArray/portfolio";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 450,
    marginBottom: "20px",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "107%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
    [theme.breakpoints.up("md")]: {
      // width: "50%",
      margin: "0px auto 20px",
    },
    [theme.breakpoints.up("xl")]: {
      // width: "31%",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
    backgroundColor: "#0e2e5dd4",
    paddingTop: 13,
    paddingBottom: 24,
    background: "linear-gradient(16deg, #0e2e5d, #23677cd6)",
    "& .GalaxyInfo-title-37": {
      paddingBottom: 9,
    },
    "& .MuiButtonGroup-root": {
      paddingTop: 17,
    },
  },
  infoCaption: {
    fontWeight: "bold",
    padding: "5px 10px 0",
  },
}));

const projectsArr = (styles, mediaStyles) => {
  return projects.map((item) => {
    return (
      <Grid item xs={12} md={5} key={item.title}>
        <Card className={styles.card} key={item.title}>
          <CardMedia classes={mediaStyles} image={item.image} />
          <Box className={styles.content}>
            <Info useStyles={useGalaxyInfoStyles}>
              <InfoSubtitle></InfoSubtitle>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoCaption className={styles.infoCaption}>
                {item.description}
              </InfoCaption>
              <ButtonGroup
                variant={"text"}
                size={"large"}
                color={"secondary"}
                orientation={"horizontal"}
                fullWidth={true}
              >
                <Button href={item.site} target="_blank">
                  Live
                </Button>
                <Button
                  href={item.code}
                  startIcon={<GitHubIcon />}
                  target="_blank"
                >
                  Github
                </Button>
              </ButtonGroup>
            </Info>
          </Box>
        </Card>
      </Grid>
    );
  });
};

export const PortfolioProjects = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
        {projectsArr(styles, mediaStyles)}
      </NoSsr>
    </>
  );
});
