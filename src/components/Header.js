import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(261deg,#0e2e5d6e,#003e9921, #0e2e5d)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  toolbar: {
    [theme.breakpoints.up("tablet")]: {
      //this customizes toolbars automatic gutters
      paddingRight: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    },
  },
  menuNav: {
    "& .MuiList-root": {
      backgroundColor: theme.palette.primary.main,
      border: "3px solid #ffffff61",
      "& .MuiButton-text": {
        color: theme.palette.secondary.main,
      },
    },
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    },
  },
  btnGroupNavMenu: {
    display: "none",
    [theme.breakpoints.up("tablet")]: {
      display: "inline-block",
    },
  },
  btnStyling: {
    "&:not(:last-child)": {
      borderColor: "transparent",
    },
  },
  btnNavMenu: {
    fontSize: 20,
    padding: "8px 19px",
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      className={classes.root}
      classes={{ root: classes.root }}
    >
      <Toolbar classes={{ gutters: classes.toolbar }}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          size={"medium"}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          className={classes.menuNav}
        >
          <MenuItem onClick={handleClose}>
            <Button href={"#About"} startIcon={<PersonIcon />}>
              About
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button href={"#Portfolio"} startIcon={<WorkIcon />}>
              Portfolio
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button href={"#Contact"} startIcon={<ContactMailIcon />}>
              Contact
            </Button>
          </MenuItem>
        </Menu>
        <ButtonGroup
          className={classes.btnGroupNavMenu}
          variant="text"
          color="primary"
          orientation="horizontal"
          size="large"
          classes={{ groupedTextPrimary: classes.btnStyling }}
        >
          <Button
            href={"#About"}
            startIcon={<PersonIcon />}
            className={"btnNavMenu"}
            classes={{ textSizeLarge: classes.btnNavMenu }}
          >
            About
          </Button>
          <Button
            href={"#Portfolio"}
            startIcon={<WorkIcon />}
            className={"btnNavMenu"}
            classes={{ textSizeLarge: classes.btnNavMenu }}
          >
            Portfolio
          </Button>
          <Button
            href={"#Contact"}
            startIcon={<ContactMailIcon />}
            className={"btnNavMenu"}
            classes={{ textSizeLarge: classes.btnNavMenu }}
          >
            Contact
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
