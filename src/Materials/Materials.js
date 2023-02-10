import React, { useState, useEffect } from "react";
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
import Header from "./MaterialsHeader";
import { API } from "../backend";
import axios from "axios";
import "./Materials.css";

function Materials() {
  const [addMaterialPopupOpen, setAddMaterialPopupOpen] = useState(false);
  const [editMaterialPopupOpen, setEditMaterialPopupOpen] = useState(false);
  const [addDimensionPopupOpen, setAddDimensionPopupOpen] = useState(false);
  const [editDimensionPopupOpen, setEditDimensionPopupOpen] = useState(false);

  const openAddMaterialPopup = () => {
    setAddMaterialPopupOpen(true);
  };

  const closeAddMaterialPopup = () => {
    setAddMaterialPopupOpen(false);
  };

  const openEditMaterialPopup = () => {
    setEditMaterialPopupOpen(true);
  };

  const closeEditMaterialPopup = () => {
    setEditMaterialPopupOpen(false);
  };

  const openAddDimensionPopup = () => {
    setAddDimensionPopupOpen(true);
  };

  const closeAddDimensionPopup = () => {
    setAddDimensionPopupOpen(false);
  };

  const openEditDimensionPopup = () => {
    setEditDimensionPopupOpen(true);
  };

  const closeEditDimensionPopup = () => {
    setEditDimensionPopupOpen(false);
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
    <div className="materials__page__body">
      <div className="header">
        <Header />
      </div>

      <Dialog open={addMaterialPopupOpen} onClose={closeAddMaterialPopup}>
        <DialogTitle id="form-dialog-title">Add Material</DialogTitle>
        <DialogContent>
          <div>
            <div className="add__material__inputs">
            <label>Material</label>
            <input type="text"/>
            </div>
            <div className="add__material__inputs">
            <label >Description</label>
            <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeAddMaterialPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Add Material</button>
        </DialogActions>
      </Dialog>

      <Dialog open={editMaterialPopupOpen} onClose={closeEditMaterialPopup}>
        <DialogTitle id="form-dialog-title">Edit Material</DialogTitle>
        <DialogContent>
        <div>
            <div className="edit__material__inputs">
            <label>Material</label>
            <input type="text"/>
            </div>
            <div className="edit__material__inputs">
            <label >Description</label>
            <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditMaterialPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="delete__btn">Delete Material</button>
          <button className="confirm__btn">Edit Material</button>
        </DialogActions>
      </Dialog>

      <Dialog open={addDimensionPopupOpen} onClose={closeAddDimensionPopup}>
        <DialogTitle id="form-dialog-title">Add Dimension</DialogTitle>
        <DialogContent>
        <div>
            <div className="add__dimension__inputs">
            <label>Dimension</label>
            <input type="text"/>
            </div>
            <div className="add__dimension__inputs">
            <label >Description</label>
            <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeAddDimensionPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Add Dimension</button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDimensionPopupOpen} onClose={closeEditDimensionPopup}>
        <DialogTitle id="form-dialog-title">Edit Dimension</DialogTitle>
        <DialogContent>
        <div>
            <div className="edit__dimension__inputs">
            <label>Dimension</label>
            <input type="text"/>
            </div>
            <div className="edit__dimension__inputs">
            <label >Description</label>
            <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditDimensionPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="delete__btn">Delete Dimension </button>
          <button className="confirm__btn">Edit Dimension</button>
        </DialogActions>
      </Dialog>

      <div className="materials__page__main__body">
        <div className="materials__table">
          <div className="materials__table__header">
            <p className="materials__table__header__text">Materials</p>
            <span>
              <button
                className="materials__page__add__material__btn"
                onClick={() => openAddMaterialPopup()}
              >
                Add Material
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Material</TableCell>
                  <TableCell style={headingStyle}>Description</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <button
                      className="materials__page__edit__material__btn"
                      onClick={() => openEditMaterialPopup()}
                    >
                      Edit Material
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="dimensions__table">
          <div className="dimensions__table__header">
            <p className="dimensions__table__header__text">Dimensions</p>
            <span>
              <button
                className="materials__page__add__dimensions__btn"
                onClick={() => openAddDimensionPopup()}
              >
                Add Dimension
              </button>
            </span>
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Dimension</TableCell>
                  <TableCell style={headingStyle}>Description</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Dimension</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <button
                      className="materials__page__edit__dimension__btn"
                      onClick={() => openEditDimensionPopup()}
                    >
                      Edit Dimension
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

export default Materials;
