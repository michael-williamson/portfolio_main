import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    color: "white",
    zIndex: 1,
    fontWeight: "bold",
    paddingTop: "13px",
    paddingBottom: "40px",
    marginTop: "100px",
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
      background: "linear-gradient(1deg, #0e2e5d, #23677cd6)",
    },
  },
  header: {
    color: theme.palette.secondary.main,
    paddingBottom: 18,
  },
  contactBtn: {
    fontSize: 9,
    padding: "17px 0",
    color: "#7cfff7",
    [theme.breakpoints.up("sm")]: {
      fontSize: 11,
    },
    [theme.breakpoints.up("tablet")]: {
      fontSize: 14,
    },
  },
  btnLinks: {
    "&:not(:last-child)": {
      borderColor: "transparent",
    },
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="Contact">
      <Typography variant={"h3"} className={classes.header}>
        Contact
      </Typography>
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical contained primary button group"
        variant="text"
        size={"small"}
        fullWidth={true}
        classes={{ groupedTextSecondary: classes.btnLinks }}
      >
        <Button
          startIcon={<LinkedInIcon />}
          href={"https://www.linkedin.com/in/mwilliamson102/"}
          className={classes.contactBtn}
        >
          https://www.linkedin.com/in/mwilliamson102/
        </Button>
        <Button
          startIcon={<AlternateEmailIcon />}
          className={classes.contactBtn}
        >
          michaelwilliamsondesigns@gmail.com
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          href={"https://github.com/michael-williamson"}
          className={classes.contactBtn}
        >
          https://github.com/michael-williamson
        </Button>
      </ButtonGroup>
    </div>
  );
};
