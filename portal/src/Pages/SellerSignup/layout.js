import React, { Component } from 'react';
import {
  withStyles,
  Container,
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import style from './style';
import { Header } from 'Components';
import axios from 'axios';
import Config from 'Config';

class Layout extends Component {
  state = {
    hotelname: '',
    address: '',
    city: '',
    pincode: '',
    mobile: '',
    state: '',
    star: '',
    email: '',
    password: '',
    pancard: '',
    description: '',
    image: '',
    isAdded: false
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = async () => {
    //   Data From The User
    const {
      hotelname,
      address,
      city,
      pincode,
      mobile,
      state,
      star,
      email,
      password,
      pancard,
      description,
      image
    } = this.state;

    // Api Code
    await axios.post(`${Config.SERVER_URL}/hotelragistration`, {
      hotelname,
      address,
      city,
      pincode,
      mobile,
      state,
      star,
      email,
      password,
      pancard,
      description,
      image
    });

    // Clear The State
    this.setState({
      hotelname: '',
      address: '',
      city: '',
      pincode: '',
      mobile: '',
      state: '',
      star: '',
      email: '',
      password: '',
      pancard: '',
      description: '',
      image: '',
      isAdded: true
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title='Hotel Registration' />
        <Container maxWidth='md'>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                name='hotelname'
                id='hotelname'
                className={classes.textField}
                variant='outlined'
                label='Hotel Name'
                fullWidth
                value={this.state.hotelname}
                onChange={this.handleInput}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextField
                name='address'
                id='address'
                label='Address'
                multiline
                className={classes.textField}
                variant='outlined'
                fullWidth
                value={this.state.address}
                onChange={this.handleInput}
              />
            </Grid>
            {/* Second Row */}
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                name='city'
                id='city'
                className={classes.textField}
                variant='outlined'
                label='City'
                fullWidth
                value={this.state.city}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name='pincode'
                id='pincode'
                className={classes.textField}
                variant='outlined'
                label='Pin code'
                fullWidth
                value={this.state.pincode}
                onChange={this.handleInput}
              />
            </Grid>
            {/* Third Row */}
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                id='mobile'
                name='mobileno'
                className={classes.textField}
                variant='outlined'
                label='Mobile No'
                fullWidth
                value={this.state.mobile}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                id='state'
                name='state'
                className={classes.textField}
                variant='outlined'
                label='State'
                fullWidth
                value={this.state.state}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                id='star'
                name='star'
                className={classes.textField}
                variant='outlined'
                label='Star'
                fullWidth
                value={this.state.star}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                id='email'
                name='email'
                className={classes.textField}
                variant='outlined'
                label='Email'
                placeholder='Enter Your Email'
                fullWidth
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                id='password'
                name='password'
                label='Password'
                className={classes.textField}
                type='password'
                variant='outlined'
                fullWidth
                value={this.state.password}
                onChange={this.handleInput}
              />
            </Grid>
            {/* last-row */}
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                id='pancard'
                name='panno'
                className={classes.textField}
                variant='outlined'
                label='Pancard No'
                fullWidth
                value={this.state.pancard}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                id='description'
                name='Description'
                className={classes.textField}
                variant='outlined'
                label='Description'
                fullWidth
                value={this.state.description}
                onChange={this.handleInput}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                id='image'
                // type='file'
                name='Select Hotel Image'
                className={classes.textField}
                variant='outlined'
                fullWidth
                value={this.state.image}
                onChange={this.handleInput}
              />
            </Grid>
          </Grid>

          <Button
            onClick={this.handleSubmit}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            hotelragistration
          </Button>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
