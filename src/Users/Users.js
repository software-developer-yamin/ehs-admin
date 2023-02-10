import React, { useState, useEffect } from "react";
import Header from "./UsersHeader";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { API } from "../backend";
import "./Users.css";

function Users() {
  const [openUserPopup, setOpenUserPopup] = useState(false);

  const openUserDetailsPopup = async () => {
    setOpenUserPopup(true);
  };

  const closeUserDetailsPopup = () => {
    setOpenUserPopup(false);
  };
  const headingStyle = {
    "font-family": "Lato",
    "font-style": "normal",
    "font-weight": 600,
    "font-size": "16px",
    "line-height": "19px",
    color: "#333333",
  };

  return (
    <div className="users__body">
      <div className="header">
        <Header />
      </div>

      <Dialog
        open={openUserPopup}
        onClose={closeUserDetailsPopup}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <>
            <div className="users__popup__header">
              <div>
                <p>User Name</p>
                <p>User ID # </p>
              </div>
            </div>

            <div className="account__details">
              <p className="account__details__title">Account Details</p>
              <p className="account__details__text">Account Created On:</p>
              <p className="account__details__text">Email:</p>
              <p className="account__details__text">Contact Number :</p>
              <p className="account__details__text">
                Default Shipping Address:
              </p>
            </div>
            <div className="order__history">
              <p className="order__history__title">Order History</p>
              <p className="order__history__text">No. of Orders: </p>

              <div className="users__orders__details">
                <div className="users__orders__details__left">
                  <Avatar
                    variant="square"
                    alt="Add Image"
                    src=""
                    style={{
                      height: "140px",
                      width: "140px",
                    }}
                  />
                  <div className="users__orders__details__text">
                    <div className="individual__item__details__1">Order ID</div>
                    <div className="individual__item__details__1">Name</div>
                    <div className="individual__item__details__2">
                      Material:
                    </div>
                    <div className="individual__item__details__2">
                      Dimension:
                    </div>
                    <div className="individual__item__details__2">
                      Price: Quantity:
                    </div>
                    <div className="individual__item__details__2">
                      Seller: Dichroic Labs
                    </div>
                  </div>
                </div>
                <div className="users__orders__details__right">
                  <p className="individual__item__details__2">Date</p>
                  <p className="individual__item__details__1">Order Total:</p>
                  <br/>
                  <br/>
                  <br/>
                  <a href="#" style={{"marginLeft": "10px"}}>View Invoice</a>
                </div>
              </div>
            </div>
          </>
        </DialogContent>
      </Dialog>

      <div className="users__main__body">
        <div className="users__body__top">
          <form>
            <input type="text" placeholder="Search.." />
          </form>
        </div>

        <div className="users__body__bottom">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>User ID</TableCell>
                  <TableCell style={headingStyle}>Full Name</TableCell>
                  <TableCell style={headingStyle}>Email</TableCell>
                  <TableCell style={headingStyle}>Contact Number</TableCell>
                  <TableCell style={headingStyle}>Date Created</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>User ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>
                    <span
                      className="view__option"
                      onClick={openUserDetailsPopup}
                    >
                      View
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Users;
