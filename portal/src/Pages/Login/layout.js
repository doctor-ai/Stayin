import React, { Component } from 'react';
import { Snackbar } from 'Components';
import { AuthServices } from 'Services';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {
  withStyles,
  Typography,
  TextField,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Avatar,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { Header } from 'Components';
import { Link } from 'react-router-dom';

class Layout extends Component {
  state = {
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false
  };
  onClickLogin = async () => {
    this.setState({ isChecking: true });
    const { username, password } = this.state;
    const response = await AuthServices.login(username, password);
    if (!response.success) {
      const message = response.data.message;
      console.log(message);
      // for (const m of message) {
      //   alert(m);
      // }
      this.setState({
        message: message[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.setState({
        isOpen: true,
        message: 'Successfully login',
        variant: 'success'
      });
      this.props.history.push('/home');
    }
    this.setState({
      firstname: '',
      lastname: '',
      isChecking: false
    });
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
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
                onClick={this.onClickLogin}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={this.state.isChecking ? true : false}
              >
                {this.state.isChecking && <CircularProgress size={20} />}Login
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link to='/signup' variant='body2'>
                    Create new account? Sign up
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
