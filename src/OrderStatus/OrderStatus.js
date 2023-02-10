import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { API } from "../backend";
import axios from "axios";
import Header from "./OrderStatusHeader";
import "./OrderStatus.css";

function OrderStatus() {
  const [addOrderStatusPopupOpen, setAddOrderStatusPopupOpen] = useState(false);
  const [editOrderStatusPopupOpen, setEditOrderStatusPopupOpen] =
    useState(false);

  const openAddOrderStatusPopup = () => {
    setAddOrderStatusPopupOpen(true);
  };

  const closeAddOrderStatusPopup = () => {
    setAddOrderStatusPopupOpen(false);
  };

  const openEditOrderStatusPopup = () => {
    setEditOrderStatusPopupOpen(true);
  };

  const closeEditOrderStatusPopup = () => {
    setEditOrderStatusPopupOpen(false);
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
    <div className="order__status__body">
      <div className="header">
        <Header />
      </div>

      <Dialog open={addOrderStatusPopupOpen} onClose={closeAddOrderStatusPopup}>
        <DialogTitle id="form-dialog-title">Add Status</DialogTitle>
        <DialogContent>
          <div>
            <div className="add__order__status__inputs">
              <label>Status</label>
              <input type="text" />
            </div>
            <div className="add__order__status__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeAddOrderStatusPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Add Status</button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editOrderStatusPopupOpen}
        onClose={closeEditOrderStatusPopup}
      >
        <DialogTitle id="form-dialog-title">Edit Status</DialogTitle>
        <DialogContent>
          <div>
            <div className="edit__order__status__inputs">
              <label>Status</label>
              <input type="text" />
            </div>
            <div className="edit__order__status__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditOrderStatusPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="delete__btn">Delete Status</button>
          <button className="confirm__btn">Edit Status</button>
        </DialogActions>
      </Dialog>

      <div className="order__status__main__body">
        <div className="order__status__table">
          <div className="order__status__table__header">
            <p className="order__status__table__header__text">Order Status</p>
            <span>
              <button
                className="order__status__add__status__btn"
                onClick={() => openAddOrderStatusPopup()}
              >
                Add Status
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Status</TableCell>
                  <TableCell style={headingStyle}>Description</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <button
                      className="order__status__edit__status__btn"
                      onClick={() => openEditOrderStatusPopup()}
                    >
                      Edit Material
                    </button>
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

export default OrderStatus;
