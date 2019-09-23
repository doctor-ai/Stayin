import React, { Component } from 'react';
import { withStyles, Grid, Container ,Typography,Button} from '@material-ui/core';
import style from './style';
class Layout extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div classes={classes.container}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} className={classes.container}>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                            <Typography variant="h2" className={classes.typo}>
                               404,Your Page is Not Found
                            </Typography>
                            <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={()=>this.props.history.push('/')}
                    >
                    Back  Home
                    </Button>
                        </Grid>

                    </Grid>
                </Container>
            </div>
     );
    }
}

export default withStyles(style)(Layout);