import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const MainTable = (props) => {
  const { label, rows, cols, minWidth, showIndex } = props;

  const [tableRow, setTableRow] = useState(rows);
  const [tableCol, setTableCol] = useState(cols);

  useEffect(() => {
    if (showIndex) {
      setTableCol([{ label: "Num.", col: "index" }, ...cols]);
      setTableRow(rows.map((v, i) => ({ index: i + 1, ...v })));
    }
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: minWidth }} aria-label="table">
          <TableHead>
            <TableRow key={"head"}>
              {tableCol &&
                tableCol.map((c) => {
                  return <TableCell key={c.col}>{c.label}</TableCell>;
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRow &&
              tableRow
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row?.id}>
                    {tableCol.map((col) => (
                      <TableCell key={col?.col}>{row[col.col]}</TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component={"div"}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

const colsShape = {
  col: PropTypes.string,
  label: PropTypes.string,
};

MainTable.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.shape(colsShape)).isRequired,
  cols: PropTypes.arrayOf(PropTypes.object).isRequired,
  minWidth: PropTypes.number,
  showIndex: PropTypes.bool,
};

MainTable.defaultProps = {
  label: "Table",
  minWidth: 620,
  showIndex: true,
};

export default MainTable;
