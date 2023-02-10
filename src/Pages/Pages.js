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
import Header from "./PagesHeader";
import "./Pages.css";

function Pages() {
  const [addPagePopupOpen, setAddPagePopupOpen] = useState(false);
  const [editPagePopupOpen, setEditPagePopupOpen] = useState(false);

  const openAddPagePopup = () => {
    setAddPagePopupOpen(true);
  };

  const closeAddPagePopup = () => {
    setAddPagePopupOpen(false);
  };

  const openEditPagePopup = () => {
    setEditPagePopupOpen(true);
  };

  const closeEditPagePopup = () => {
    setEditPagePopupOpen(false);
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
    <div className="pages__body">
      <div className="header">
        <Header />
      </div>

      <Dialog open={addPagePopupOpen} onClose={closeAddPagePopup}>
        <DialogTitle id="form-dialog-title">Add Page</DialogTitle>
        <DialogContent>
          <div>
            <div className="add__page__inputs">
              <label>Page</label>
              <input type="text" />
            </div>
            <div className="add__page__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeAddPagePopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Add Page</button>
        </DialogActions>
      </Dialog>

      <Dialog open={editPagePopupOpen} onClose={closeEditPagePopup}>
        <DialogTitle id="form-dialog-title">Edit Page</DialogTitle>
        <DialogContent>
          <div>
            <div className="edit__page__inputs">
              <label>Page</label>
              <input type="text" />
            </div>
            <div className="edit__page__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditPagePopup} className="cancel__btn">
            Cancel
          </button>
          <button className="delete__btn">Delete Page</button>
          <button className="confirm__btn">Edit Page</button>
        </DialogActions>
      </Dialog>

      <div className="pages__main__body">
        <div className="pages__table">
          <div className="pages__table__header">
            <p className="pages__table__header__text">Pages</p>
            <span>
              <button
                className="pages__add__page__btn"
                onClick={() => openAddPagePopup()}
              >
                Add Page
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Page</TableCell>
                  <TableCell style={headingStyle}>Description</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Page</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <button
                      className="pages__edit__page__btn"
                      onClick={() => openEditPagePopup()}
                    >
                      Edit Page
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

export default Pages;
