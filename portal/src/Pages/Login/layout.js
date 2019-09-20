import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Header from "Components/Header";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Typography,
  withStyles,
  TextField,
  Button,
  CssBaseline,
  Container,
  Link
} from "@material-ui/core";

import style from "./style";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Login" />
        <Container component="main" maxWidth="xs" className={classes.container}>
          <div className={classes.container}>
            <img
              src="Images/avatar.svg"
              className={classes.svg1}
              width="150"
              height="150"
              alt="avter"
            />

            <form className={classes.from} noValidate>
              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
                placeholder="Enter Your email"
                autoComplete="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className={classes.svg} position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                className={classes.textField}
                margin="normal"
                fullWidth
                type="password"
                variant="outlined"
                placeholder="Enter Your Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className={classes.svg} position="start">
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.btnsubmit}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
