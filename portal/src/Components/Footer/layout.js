import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

import style from './style';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Container>
      </footer>
    );
  }
}

export default withStyles(style)(Layout);
