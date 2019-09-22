import React, { Component } from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  withStyles,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Card
} from '@material-ui/core';
import style from './style';
import { Header, Footer } from 'Components';

const cards = [1, 2, 3];

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title='STAY IN' />
        <div className='header' className={classes.mainheader}>
          <div className={classes.overlay}></div>
          <div className={classes.headerContent}>
            <Typography variant='h4' color='default' className={classes.typo}>
              Welcome To STAY IN
            </Typography>
            <div>
              <Button
                href='/login'
                onClick='/login'
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Login
              </Button>
              <Button
                href='/signup'
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                SingUp
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.Search}>
          <Container maxWidth="sm">
            <TextField
              name="Search"
              className={classes.textField}
              variant="outlined"
              placeholder="Search Your Hotel"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#F50057" }}>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Hotel"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hotel Name
                    </Typography>
                    <Typography style={{ paddingTop: 10 }}>
                      ⭐️⭐️️⭐️
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      BOOK NOW{" "}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
