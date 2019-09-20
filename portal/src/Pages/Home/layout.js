import React, { Component } from 'react';
import { withStyles, Button, Card, CardActions } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

import style from './style';
import { Header, Footer } from 'Components';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <CssBaseline />
        <Container maxWidth='lg'>
          <main>
            <Paper className={classes.mainFeaturedPost}>
              {
                <img
                  style={{ display: 'none' }}
                  src='https://source.unsplash.com/user/erondu'
                  alt='background'
                />
              }
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={12}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      component='h1'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                      Welcome To StayIN
                    </Typography>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.button}
                    >
                      Login
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.button}
                    >
                      SignUp
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <Container className={classes.cardGrid} maxWidth='md'>
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image='https://source.unsplash.com/random'
                        title='Image title'
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5' component='h2'>
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to
                          describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>
                          View
                        </Button>
                        <Button size='small' color='primary'>
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(style)(Layout);
