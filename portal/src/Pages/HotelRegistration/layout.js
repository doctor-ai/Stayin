import React, { Component } from 'react';
import { withStyles, Container, Grid, TextField, } from '@material-ui/core';

import style from './style';
import { Header } from 'Components';

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Hotel Registration" />
        <Container maxWidth="md" >
          <Grid container spacing={3} className={classes.container} >
            <Grid item xs={12} md={12} lg={12} >
              <TextField
                name="hotelname"
                id="outlined-bare"
                className={classes.textField}
                variant="outlined"
                label="Hotel Name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6} >
              <TextField
                name="hotelname"
                id="outlined-bare"
                className={classes.textField}
                variant="outlined"
                label="Hotel Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                name="address"
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                className={classes.textField}
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* Second Row */}
            <Grid item xs={12} md={6} lg={6} >
              <TextField
                name="city"
                id="outlined-bare"
                className={classes.textField}
                variant="outlined"
                label="City"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="pincode"
                id="outlined-bare"
                className={classes.textField}
                variant="outlined"
                label="Pin code"
                fullWidth
              />
            </Grid>
            {/* Third Row */}
            <Grid item xs={12} md={4} lg={4} >
              <TextField
                name="mobileno"
                className={classes.textField}
                variant="outlined"
                label="Mobile No"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                name="state"
                className={classes.textField}
                variant="outlined"
                label="State"
                fullWidth
              />

            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                name="star"
                className={classes.textField}
                variant="outlined"
                label="Star" fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} >
              <TextField
                name="email"
                className={classes.textField}
                variant="outlined"
                label="Email"
                placeholder="Enter Your Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                name="password"
                label="Password"
                className={classes.textField}
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* last-row */}
            <Grid item xs={12} md={12} lg={12} >
              <TextField
                name="panno"
                className={classes.textField}
                variant="outlined"
                label="Pancard No"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
              <TextField
                name="Description"
                className={classes.textField}
                variant="outlined"
                label="Description"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
              <TextField
                type="file"
                name="Select Hotel Image"
                className={classes.textField}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);