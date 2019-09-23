import React from "react";
import {
  withStyles,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container

} from "@material-ui/core";
import Header from "Components/Header";
import style from "./style";
class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Admin" className={classes.Header} />
        <div>
        <Container className={classes.tophead} maxWidth="xl">
            <div>
            Worked Hotel
            </div>
            <div>
            <Button
            variant="contained"
            color="secondary"
            onClick={()=>{this.props.history.push('/admin/addhotel')}}
            className={classes.button} >
            ADD HOTEL
             </Button>
            </div>
        </Container>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hotel Name</TableCell>
                <TableCell style={{ width: "20%" }}>Mobile No</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.listContainer}>
                <TableCell>Night Queen</TableCell>
                <TableCell>9106962809</TableCell>
                <TableCell>Deluxe</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>
    );
  }
}
export default withStyles(style)(Layout);
