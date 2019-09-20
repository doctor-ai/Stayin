import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

import style from "./style";
import { Header } from "Components";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header title="Home" />
        <div>
          <img src="Images/theme.jpg" width="1536" height="500" />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
