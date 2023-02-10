import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const headingStyle = {
  "font-family": "Lato",
  "font-style": "normal",
  "font-weight": 600,
  "font-size": "16px",
  "line-height": "19px",
  color: "#333333",
};

export default function BasicTable() {

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={headingStyle}>#</TableCell>
            <TableCell style={headingStyle}>Banner Name</TableCell>
            <TableCell style={headingStyle}>Page</TableCell>
            <TableCell style={headingStyle}>Category</TableCell>
            <TableCell style={headingStyle}>Sub-category</TableCell>
            <TableCell style={headingStyle} ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
