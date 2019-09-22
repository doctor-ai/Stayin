import React, { Component } from 'react';
import { Typography, AppBar, Toolbar, withStyles } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <AppBar position='static'>
        <Toolbar className={classes.navigationBar}>
<<<<<<< HEAD
          <Typography variant='h6'>{title || 'STAYIN'}</Typography>
=======
          <Typography variant='h6' color="primary">{title || 'STAY IN'}</Typography>
>>>>>>> d06617bd88b35428340bef50dffe6c3254273e7d
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
