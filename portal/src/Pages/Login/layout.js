import React, { Component } from 'react';
import {
  withStyles,
  TextField,
  Button,
  Container,
  Grid
} from '@material-ui/core';
import style from './style';
import { Header, Footer } from 'Components';

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
                <Grid item xs={12}>
                  <TextField
                    AccountCircle
                    autoFocus
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    placeholder='Email'
                    name='email'
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
                fullWidth
                href='/'
                variant='contained'
                color='secondary'
                className={classes.submit}
              >
                Login
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
