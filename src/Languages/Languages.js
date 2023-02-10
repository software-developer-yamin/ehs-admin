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
import Header from "./LanguagesHeader";
import "./Languages.css";

function Languages() {
  const [addLanguagePopupOpen, setAddLanguagePopupOpen] = useState(false);
  const [editLanguagePopupOpen, setEditLanguagePopupOpen] = useState(false);

  const openAddLanguagePopup = () => {
    setAddLanguagePopupOpen(true);
  };

  const closeAddLanguagePopup = () => {
    setAddLanguagePopupOpen(false);
  };

  const openEditLanguagePopup = () => {
    setEditLanguagePopupOpen(true);
  };

  const closeEditLanguagePopup = () => {
    setEditLanguagePopupOpen(false);
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
    <div className="languages__page__body">
      <div className="header">
        <Header />
      </div>

      <Dialog open={addLanguagePopupOpen} onClose={closeAddLanguagePopup}>
        <DialogTitle id="form-dialog-title">Add Language</DialogTitle>
        <DialogContent>
          <div>
            <div className="add__language__inputs">
              <label>Language</label>
              <input type="text" />
            </div>
            <div className="add__language__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeAddLanguagePopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Add Language</button>
        </DialogActions>
      </Dialog>

      <Dialog open={editLanguagePopupOpen} onClose={closeEditLanguagePopup}>
        <DialogTitle id="form-dialog-title">Edit Language</DialogTitle>
        <DialogContent>
          <div>
            <div className="edit__language__inputs">
              <label>Language</label>
              <input type="text" />
            </div>
            <div className="edit__language__inputs">
              <label>Description</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditLanguagePopup} className="cancel__btn">
            Cancel
          </button>
          <button className="delete__btn">Delete Language</button>
          <button className="confirm__btn">Edit Language</button>
        </DialogActions>
      </Dialog>

      <div className="languages__main__body">
        <div className="languages__table">
          <div className="languages__table__header">
            <p className="languages__table__header__text">Languages</p>
            <span>
              <button
                className="languages__page__add__language__btn"
                onClick={() => openAddLanguagePopup()}
              >
                Add Language
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Language</TableCell>
                  <TableCell style={headingStyle}>Description</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <button
                      className="languages__page__edit__language__btn"
                      onClick={() => openEditLanguagePopup()}
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

export default Languages;
