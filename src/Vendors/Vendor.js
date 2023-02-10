import React from "react";
import Header from "./VendorHeader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from "@material-ui/core/Avatar";
import "./Vendor.css";

function Vendor() {
  const headingStyle = {
    "font-family": "Lato",
    "font-style": "normal",
    "font-weight": 600,
    "font-size": "16px",
    "line-height": "19px",
    color: "#333333",
  };
  return (
    <div className="vendors__body">
      <div className="header">
        <Header />
      </div>

      <div className="vendors__main__body">
        <div className="vendors__title">
          <div className="vendors__title__text">
            <p>VENDOR'S NAME</p>
            <p>PHONE NUMBER</p>
            <p>EMAIL ID</p>
          </div>
        </div>
        <div className="vendors__accordian">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="accordian__title">
                <p>VENDOR'S NAME</p>
                <p>PHONE NUMBER</p>
                <p>EMAIL ID</p>
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordian__body">
                <div className="accordian__top">
                  <Avatar
                    variant="square"
                    alt=""
                    src=""
                    style={{
                      height: "120px",
                      width: "120px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="accordian__top__text">
                    <div>Name</div>
                    <div>Address</div>
                    <div>Email</div>
                    <div>Number</div>
                  </div>
                </div>

                <div className="accordian__middle">
                  <div>Vendor's ID</div>
                  <div>Ordered On</div>
                </div>

                <div className="acoordian__bottom">
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={headingStyle}>#</TableCell>
                          <TableCell style={headingStyle}>
                            Poster Name
                          </TableCell>
                          <TableCell style={headingStyle}>Quantity</TableCell>
                          <TableCell style={headingStyle}>Dimensions</TableCell>
                          <TableCell style={headingStyle}>
                            Material
                          </TableCell>
                          <TableCell style={headingStyle}>Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody></TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
