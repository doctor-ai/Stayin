import React, { Component } from "react";
import {
  withStyles,
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Header from "Components/Header";
import InputAdornment from "@material-ui/core/InputAdornment";

import style from "./style";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Signup" />
        <Container component="main" maxWidth="xs" className={classes.container}>
          <div className={classes.paper}>
            <img
              src="Images/avatar.svg"
              className={classes.svg1}
              width="150"
              height="150"
              alt="avter"
            />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    className={classes.textField}
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    placeholder="First name"
                    id="firstName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    className={classes.textField}
                    placeholder="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Your email"
                    autoComplete="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          className={classes.svg}
                          position="start"
                        >
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="Enter Your Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          className={classes.svg}
                          position="start"
                        >
                          <LockIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btnsubmit}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
