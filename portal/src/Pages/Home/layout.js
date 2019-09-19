import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import style from './style';
import { Header } from 'Components';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Typography variant='body1'>Home Screen</Typography>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
