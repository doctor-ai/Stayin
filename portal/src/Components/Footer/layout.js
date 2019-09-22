import React, { Component } from 'react';
import { Typography, Toolbar, AppBar, withStyles } from '@material-ui/core';
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
      <AppBar className={classes.footerBar} position='static'>
        <Toolbar className={classes.navigationBar}>
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
