import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';
import { Header } from 'Components';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Snackbar } from 'Components';
import {
  withStyles,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  CircularProgress
} from '@material-ui/core';
import { AuthServices } from 'Services';

class Layout extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false
  };
  onClickSignup = async () => {
    this.setState({ isChecking: true });
    const { firstname, lastname, username, password } = this.state;
    const response = await AuthServices.signup(
      firstname,
      lastname,
      username,
      password
    );
    if (!response.success) {
      const data = response.data.message;
      this.setState({
        message: data[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.setState({
        isOpen: true,
        message: 'Successfully sign up',
        variant: 'success'
      });
    }
    this.setState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      isChecking: false
    });
  };

  render() {
    const { classes } = this.props;
    const { firstname, lastname, username, password } = this.state;
    return (
      <div className={classes.container}>
        <Header />
        <Snackbar
          errorMessage={this.state.message}
          isOpen={this.state.isOpen}
          handleClose={() => this.setState({ isOpen: false })}
          variant={this.state.variant}
        />
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    placeholder='Enter firstname'
                    id='firstName'
                    autoFocus
                    value={firstname}
                    onChange={e => this.setState({ firstname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    placeholder='Enter lastname'
                    name='lastName'
                    autoComplete='lname'
                    value={lastname}
                    onChange={e => this.setState({ lastname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    placeholder='Email'
                    name='email'
                    // autoComplete='email'
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    placeholder='password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Grid>
              </Grid>

              <Button
                onClick={this.onClickSignup}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={this.state.isChecking ? true : false}
              >
                {this.state.isChecking && <CircularProgress size={20} />}Signup
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link to='/login' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
