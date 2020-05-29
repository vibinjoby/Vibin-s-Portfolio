import React from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  Box
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";

const TableCell = withStyles({
  root: {
    borderBottom: "none"
  }
})(MuiTableCell);

const useStyles = makeStyles(theme => ({
  table: {
    color: "#FFFFFFF",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      width: "98vw"
    }
  },
  tableCellKey: {
    fontFamily: "Nunito,sans-serif",
    fontSize: "18px",
    color: "#a4acc4",
    lineHeight: "1.8rem",
    fontWeight: 600
  },
  tableCellValue: {
    fontFamily: "Nunito,sans-serif",
    fontSize: "18px",
    color: "#a4acc4",
    lineHeight: "1.8rem",
    fontWeight: 400
  }
}));

export default function MyBio(props) {
  const classes = useStyles();
  let rows = [];
  for (const [key, value] of Object.entries(props.data)) {
    if (key === "about") break;
    rows.push(
      <TableRow key={key}>
        <TableCell padding="none" style={{ color: "#FFFFFF" }} size="medium">
          <Box className={classes.tableCellKey}>{key}</Box>
        </TableCell>
        <TableCell padding="default" style={{ color: "#FFFFFF" }} size="small">
          <Box className={classes.tableCellValue}>
            :&nbsp;&nbsp;&nbsp;{`   ${value}`}
          </Box>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
