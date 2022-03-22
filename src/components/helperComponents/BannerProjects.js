import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Popper, Fade } from "@material-ui/core";
import { PopperCards } from "./PopperCards";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  projectsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px 0",
    //used straight values here because transparency
    backgroundColor: "#0e2e5d87",
    border: "5px solid #0e5d4854",
    borderRadius: 5,
  },
  popper: {
    right: 0,
    width: "95%",
    margin: "6px auto 0",
    zIndex: 1000,
    [theme.breakpoints.up("xl")]: {
      width: "62%",
    },
  },
  popperBtn: {
    padding: 20,
    backgroundColor: "#0e2e5d",
    color: "white",
    borderRadius: 30,
    fontWeight: "bold",
    border: "3px solid #ffffff78",
    cursor: "pointer",
  },
  card: {
    maxWidth: 100,
    textAlign: "center",
    margin: "0 10px",
    backgroundColor: "#355686",
    color: "white",
  },
  media: {
    height: 100,
  },
  cardTitleText: {
    height: 50,
  },
}));

export const BannerProjects = () => {
  const classes = useStyles();

  const TransitionsPopper = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "transitions-popper" : undefined;

    return (
      <div>
        <button
          aria-describedby={id}
          type="button"
          onClick={handleClick}
          className={classes.popperBtn}
        >
          Latest Projects
        </button>
        <Popper
          id={id}
          className={classes.popper}
          open={open}
          anchorEl={anchorEl}
          transition
          placement={"bottom"}
          modifiers={{
            flip: {
              enabled: false,
            },
            preventOverflow: {
              enabled: false,
            },
            computeStyle: {
              order: 1,
            },
          }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Grid
                container
                direction="row"
                wrap={"nowrap"}
                justify={"space-around"}
                alignItems={"center"}
                className={classes.projectsGrid}
              >
                <PopperCards />
              </Grid>
            </Fade>
          )}
        </Popper>
      </div>
    );
  };

  return <div className={classes.root}>{TransitionsPopper()}</div>;
};
