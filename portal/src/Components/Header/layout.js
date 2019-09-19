import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import AppBar from '../Headerpages/AppBar';
import Toolbar from '../Headerpages/Toolbar';

import style from './style';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant='h6'
              underline='none'
              color='inherit'
              className={classes.title}
              to='/premium-themes/onepirate/'
            >
              {'STAYIN'}
            </Link>
            <div className={classes.right}>
              <Link
                color='inherit'
                variant='h6'
                underline='none'
                className={classes.rightLink}
                to='/login'
              >
                {'Sign In'}
              </Link>
              <Link
                variant='h6'
                underline='none'
                className={clsx(classes.rightLink, classes.linkSecondary)}
                to='/signup'
              >
                {'Sign Up'}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );
  }
}

export default withStyles(style)(Layout);
