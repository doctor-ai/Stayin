import React, { Component } from 'react';
import { withStyles,Container,Grid,TextField,Button} from '@material-ui/core';
import style from './style';

import { Header } from 'Components';
class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Hotel Login"/>
        <div className={classes.container}>
        <Container maxWidth="sm">
          <Grid  className={classes.container} >
          <Grid item xs={12} md={12} lg={12} >
          <TextField
                  name="hotelname"
                  type="Email"
                  className={classes.textField}
                  variant="outlined"
                  label="Email"
                  fullWidth
              />
                 <TextField
                  name="hotelname"
                  id="outlined-bare"
                  type="Password"
                  className={classes.textField}
                  variant="outlined"
                  label="Password"
                  fullWidth
              />
          <Button variant="contained" fullWidth color="primary" className={classes.button}>
            Login
          </Button>

        </Grid>
   </Grid>
        </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Layout);