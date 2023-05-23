import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MainTable = (props) => {
  const { label, rows, cols } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="table">
        <TableHead>
          <TableRow>
            {cols &&
              cols.map((c) => {
                return <TableCell key={c.col}>{c.label}</TableCell>;
              })}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow key={row?.id}>
                {cols.map((col) => (
                  <TableCell key={col?.col}>{row[col.col]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const colsShape = {
  col: PropTypes.string,
  label: PropTypes.string,
};

MainTable.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.shape(colsShape)),
  cols: PropTypes.arrayOf(PropTypes.object),
};

export default MainTable;
