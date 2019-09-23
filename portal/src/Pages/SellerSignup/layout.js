import React, { Component } from 'react';
import {
  withStyles,
  Container,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { Header } from 'Components';
import axios from 'axios';
import Config from 'Config';
import { Snackbar } from 'Components';

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
    message: '',
    variant: 'error',
    isChecking: false
  };

  handleSubmit = async () => {
    this.setState({ isChecking: true });
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
    const response = await axios.post(`${Config.SERVER_URL}/addhotel`, {
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
    if (!response.success) {
      const data = response.data.message;
      this.setState({
        message: data[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.setState({
        isOpen: true,
        message: 'Hotel Added successfully..',
        variant: 'success'
      });
    }

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
      isChecking: false
    });
    // console.log(response.data.message);
  };

  render() {
    const { classes } = this.props;
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

    return (
      <div>
        <Header title='Hotel Registration' />
        <Snackbar
          errorMessage={this.state.message}
          isOpen={this.state.isOpen}
          handleClose={() => this.setState({ isOpen: false })}
          variant={this.state.variant}
        />
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
                value={hotelname}
                onChange={e => this.setState({ hotelname: e.target.value })}
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
                value={address}
                onChange={e => this.setState({ address: e.target.value })}
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
                value={city}
                onChange={e => this.setState({ city: e.target.value })}
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
                value={pincode}
                onChange={e => this.setState({ pincode: e.target.value })}
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
                value={mobile}
                onChange={e => this.setState({ mobile: e.target.value })}
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
                value={state}
                onChange={e => this.setState({ state: e.target.value })}
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
                value={star}
                onChange={e => this.setState({ star: e.target.value })}
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
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
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
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
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
                value={pancard}
                onChange={e => this.setState({ pancard: e.target.value })}
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
                value={description}
                onChange={e => this.setState({ description: e.target.value })}
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
                value={image}
                onChange={e => this.setState({ image: e.target.value })}
              />
            </Grid>
          </Grid>

          <Button
            onClick={this.handleSubmit}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={this.state.isChecking ? true : false}
          >
            {this.state.isChecking && <CircularProgress size={20} />}hotel
            ragistration
          </Button>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
