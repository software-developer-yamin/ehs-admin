import React, {useState} from "react";
import Header from "./MessagesHeader";
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
import "./Messages.css";

function Messages() {
  const [openMessagePopup, setOpenMessagePopup] = useState(false);

  const openMessagesDetailsPopup = async () => {
    setOpenMessagePopup(true);
  };

  const closeMessagesDetailsPopup = () => {
    setOpenMessagePopup(false);
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
    <div className="messages__body">
      <div className="header">
        <Header />
      </div>

      <Dialog
        open={openMessagePopup}
        onClose={closeMessagesDetailsPopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <div>
           <p className="msg__popup__option">Name</p>
           <p className="msg__popup__option">Email</p>
           <p className="msg__popup__option">Contact Number</p>
           <p className="msg__popup__option">Customer Type</p>
           <p className="msg__popup__option">Subject Line</p>
           <p className="msg__popup__option">Attachment</p>
           <p className="msg__popup__option">Customer Message</p>
           <p className="message__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in in leo tempor interdum ultrices amet. Turpis eget blandit amet, euismod diam ultricies dignissim ut a. Iaculis adipiscing in rutrum dictum non, neque donec. Donec feugiat quis tortor suspendisse pharetra, blandit nulla. Proin in.</p>
           <p className="msg__popup__option">EHS Reply</p>
           <textarea className="ehs__reply" />
          </div>
        </DialogContent>
      </Dialog>

      <div className="messages__main__body">
        <div className="messages__body__top">
          <form>
            <input type="text" placeholder="Search.." />
          </form>
        </div>

        <div className="messages__body__bottom">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Sender</TableCell>
                  <TableCell style={headingStyle}>Message</TableCell>
                  <TableCell style={headingStyle}>Subject</TableCell>
                  <TableCell style={headingStyle}>Date</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>Sender</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>
                    <span
                      className="view__option"
                      onClick={openMessagesDetailsPopup}
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

export default Messages;
