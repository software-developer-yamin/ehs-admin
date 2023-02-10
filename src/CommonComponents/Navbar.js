import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logoImage from "../Assets/logo.jpg";
import Popover from "@material-ui/core/Popover";
import "./Navbar.css";

function Navbar() {
  const [anchorMsg, setAnchorMsg] = useState(null);
  const [anchorNotification, setAnchorNotification] = useState(null);

  const openMessagePopover = (event) => {
    setAnchorMsg(event.currentTarget);
  };

  const openNotificationPopover = (event) => {
    setAnchorNotification(event.currentTarget);
  };
  return (
    <div>
      <Popover
        open={Boolean(anchorMsg)}
        anchorEl={anchorMsg}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertcal: "top",
          horizontal: "right",
        }}
        onClose={() => setAnchorMsg(null)}
        disableScrollLock={true}
      ></Popover>

      <Popover
        open={Boolean(anchorNotification)}
        anchorEl={anchorNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertcal: "top",
          horizontal: "right",
        }}
        onClose={() => setAnchorNotification(null)}
        disableScrollLock={true}
      ></Popover>

      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logoImage} alt="" />
          <div className="admin__text">| Admin</div>
        </div>
        <div className="navbar__icons">
          <div className="email__icon">
            <EmailIcon onClick={(event) => openMessagePopover(event)} />
          </div>
          <div className="notifications__icon">
            <NotificationsIcon
              onClick={(event) => openNotificationPopover(event)}
            />
          </div>
          <div className="account__icon">
            <AccountCircleIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
