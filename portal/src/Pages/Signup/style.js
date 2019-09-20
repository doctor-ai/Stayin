const style = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing() * 90,
    flexDirection: "column"
  },
  paper: {
    margin: theme.spacing() * 1.5,
    textAlign: "center"
  },
  textField: {
    margin: theme.spacing() * 0.3,
    fontFamily: "Montserrat sans-serif"
  },

  btnsubmit: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: theme.spacing() * 0.6,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },

  svg: {
    color: "#1E90FF"
  }
});

export default style;
