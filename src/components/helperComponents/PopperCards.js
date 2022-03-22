import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import projects from "../../projectsArray/portfolio";
import { ButtonGroup } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 130,
    minHeight: 240,
    backgroundColor: theme.palette.error.main,
    border: theme.palette.error.main,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "121%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 163,
    },
    [theme.breakpoints.up("tablet")]: {
      width: 280,
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 11,
    width: "100%",
    textAlign: "center",
    "& .GalaxyInfo-title-37": {
      paddingBottom: 9,
    },
  },
  liveBtn: {
    marginBottom: "5px",
  },
}));

const projectsArr = (styles, mediaStyles) => {
  return projects.map((item, index) => {
    if (index > 1) {
      return null;
    }
    return (
      <Card className={styles.card} key={item.title}>
        <CardMedia classes={mediaStyles} image={item.image} />
        <Box className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle></InfoSubtitle>
            <InfoTitle>{item.title}</InfoTitle>
            <ButtonGroup
              variant={"text"}
              size={"large"}
              color={"secondary"}
              orientation={"vertical"}
            >
              <Button
                className={styles.liveBtn}
                href={item.site}
                target="_blank"
              >
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
    );
  });
};

export const PopperCards = React.memo(function GalaxyCard() {
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
