import React, { Component } from 'react';
import style from './style';
import { Header, Footer } from 'Components';

import {
  withStyles,
  Container,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Container component='main' maxWidth='xs'>
          <div className={classes.paper}>
            <img src='/images/boy.svg' alt='svgicon' height='150' width='150' />
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
                  />
                </Grid>
              </Grid>

              <Button
                onClick={this.onClickSignup}
                fullWidth
                variant='contained'
                color='secondary'
                href='/'
                className={classes.submit}
              >
                Signup
              </Button>
            </form>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(style)(Layout);
