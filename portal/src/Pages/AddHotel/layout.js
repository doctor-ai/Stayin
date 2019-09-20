import React, { Component } from "react";
import Header from "Components/Header";

import {
  withStyles,
  TextField,
  Button,
  CssBaseline,
  Container
} from "@material-ui/core";

import style from "./style";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="AddHotel" />
        <Container component="main" maxWidth="xs" className={classes.container}>
          <div className={classes.container}>
            <div>
              <img
                src="Images/avatar.svg"
                className={classes.svg1}
                width="150"
                height="150"
                alt="avter"
              />
            </div>

            <form className={classes.from} noValidate>
              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
                placeholder="Enter YourHotel Name"
                autoComplete="Hotel Name"
              />

              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                type="Size"
                variant="outlined"
                placeholder="Enter Your Size"
              />

              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                type="image"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                variant="outlined"
                placeholder="Enter Your image"
              />

              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                type="Description"
                variant="outlined"
                placeholder="Enter Your Description"
              />
              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                type="Price"
                variant="outlined"
                placeholder="Enter Your Price"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.btnsubmit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
