import React,{useState} from "react";
import Header from "./SettingsHeader";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Settings.css";
import { Link } from "react-router-dom";

function Settings() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [editDetailsPopupOpen, setEditDetailsPopupOpen] = useState(false);

  const linkStyle = {
    color: "black",
    "text-decoration": "none",
  };

  const openEditDetailsPopup = () => {
    setEditDetailsPopupOpen(true);
  }

  const closeEditDetailsPopup = () => {
    setEditDetailsPopupOpen(false);
  }
  return (
    <div className="settings__body">
      <div className="header">
        <Header />
      </div>

      <Dialog open={editDetailsPopupOpen} onClose={closeEditDetailsPopup}
      fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-title">Edit Contact Details</DialogTitle>
        <DialogContent>
          <div>
            <div className="edit__details__inputs">
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="edit__details__inputs">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="edit__details__inputs">
              <label>Address</label>
              <textarea />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={closeEditDetailsPopup} className="cancel__btn">
            Cancel
          </button>
          <button className="confirm__btn">Update</button>
        </DialogActions>
      </Dialog>


      <div className="settings__main__body">
        <div className="products__settings">
          <span className="products__settings__title">
            <p>Product & Banners</p>
          </span>
          <span className="products__settings__options">
            <Link style={linkStyle} to="/materials" ><p>Material & Dimensions </p></Link>
            <Link style={linkStyle} to="/languages" ><p>Language</p></Link>
            <Link style={linkStyle} to="/pages" ><p>Page</p></Link>
            <Link style={linkStyle} to="/categories" ><p>Categories & Sub-Categories</p></Link>
          </span>
        </div>
        <div className="orders__settings">
          <span className="orders__settings__title">
            <p>Orders</p>
          </span>
          <span className="orders__settings__options">
          <Link style={linkStyle} to="/order__status" ><p>Status</p></Link>
          </span>
        </div>
        <div className="contact__details">
          <div className="contact__details__title">
            <p className="contact__details__title__text">Contact Details</p>
            <p className="edit__contact__details__btn" onClick={() => openEditDetailsPopup()}>Edit</p>
          </div>
          <div className="contact__details__text">
            <p>Phone Number : {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Address: {address} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
