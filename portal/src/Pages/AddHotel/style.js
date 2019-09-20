const style = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing() * 90,
    flexDirection: "column"
  },
  image: {},
  textField: {
    margin: theme.spacing(1),
    fontFamily: "Montserrat sans-serif"
  },

  btnsubmit: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: theme.spacing() * 1,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  }
});

export default style;
