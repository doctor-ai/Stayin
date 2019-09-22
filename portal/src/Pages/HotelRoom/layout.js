import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Container,
  Typography,
  Button
} from "@material-ui/core";

import style from "./style";
import { Header } from "Components";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Room" />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.hotelimages}>
                <img src="/images/Hotel.jpg" className={classes.img} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.content}>
                <div className={classes.innercontent}>
                  <div className={classes.topcontent}>
                    <div>
                      <Typography variant="h5" gutterBottom>Hotel Name</Typography>
                      Dulux Room
                      </div>
                    <div>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                      >
                        4.2
                      </Button>
                    </div>
                  </div>
                  <div className={classes.center} >
                     <h4>Why This Hotel ??</h4>
                    <p>
                      If you are working inside Microsoft Word and need some
                      filler text to test the layout of fonts and other design
                      cheking Room
                    </p>
                    <p className={classes.Address}>
                      <b>Address:</b> <span>
                      Sec-23,Near,G-6 Circle,Gandhinager,382355
                        </span>
                    </p>
                   <p className={classes.Moblile}>
                    <b>Phone:</b> +9106962809
                    </p>
                    <p className={classes.Moblile}>
                    <b>Email:</b> test123@gmail.com
                    </p>
                    <p className={classes.Moblile}>
                    <b>City:</b> Gandhinagar
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
