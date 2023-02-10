import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { API } from "../backend";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import Header from "./AuthorHeader";
import "./Author.css";

function PromosPage() {
  //defining states
  const [authorsData, setAuthorsData] = useState([]);
  const [particularAuthor, setParticularAuthor] = useState([]);
  const [openAddAuthorPopup, setOpenAddAuthorPopup] = useState(false);
  const [openEditAuthorPopup, setOpenEditAuthorPopup] = useState(false);
  const [authorObjId, setAuthorObjId] = useState();
  const [authorName, setAuthorName] = useState();
  const [editAuthorName, setEditAuthorName] = useState();
  const [authorEmail, setAuthorEmail] = useState();
  const [authorDesignation, setAuthorDesignation] = useState();
  const [authorDescription, setAuthorDescription] = useState();
  const [authorImage, setAuthorImage] = useState();
  const [authorEditImg, setAuthorEditImg] = useState();
  const [authorCreatedSnackbarOpen,setAuthorCreatedSnackbarOpen] = useState(false);
  const [authorEditedSnackbarOpen,setAuthorEditedSnackbarOpen] = useState(false);
  const [authorDeletedSnackbarOpen,setAuthorDeletedSnackbarOpen] = useState(false);

  //getting author data
  const getAuthorsData = async () => {
    await axios
      .get(`${API}/author/getAuthor`)
      .then((response) => setAuthorsData(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  //use effect calls
  useEffect(() => {
    getAuthorsData();
  }, []);

  //add author functions
  const openAddAuthPopup = () => {
    setOpenAddAuthorPopup(true);
    console.log(authorsData);
    setAuthorImage("");
  };

  const closeAddAuthPopup = () => {
    setOpenAddAuthorPopup(false);
  };

  //adding author
  const addAuthor = async () => {
    let authorData = {
      author_name: authorName,
      auth_email: authorEmail,
      author_designation: authorDesignation,
      author_description: authorDescription,
      auth_image: authorImage,
    };

    await axios.post(`${API}/author/createAuthor`, authorData);
    getAuthorsData();

    setAuthorCreatedSnackbarOpen(true);
  };


  //edit author functions
  const openEditAuthPopup = (author) => {
    setEditAuthorName("");
    console.log(author);
    setAuthorObjId(author._id);
    setAuthorEditImg(author.auth_image)
    setParticularAuthor(author);
    setOpenEditAuthorPopup(true);
  };

  const closeEditAuthPopup = () => {
    setOpenEditAuthorPopup(false);
  };

  //editing author
  const editAuthor = async () => {
    let updAuthData ={};
    if(editAuthorName === undefined){
      updAuthData = {
        author_obj_id: authorObjId,
        auth_email: authorEmail,
        author_designation: authorDesignation,
        author_description: authorDescription,
        auth_image: authorEditImg,
      };
    } else if(editAuthorName !== undefined) {
      updAuthData = {
        author_obj_id: authorObjId,
        author_name:editAuthorName,
        auth_email: authorEmail,
        author_designation: authorDesignation,
        author_description: authorDescription,
        auth_image: authorEditImg,
      };
    }

    await axios.post(`${API}/author/updateAuthor`, updAuthData);
    getAuthorsData();

    setAuthorEditedSnackbarOpen(true);
  };

  //upload author image
  const uploadAuthImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setAuthorImage(response.data.data.fileSavedUrl));
  };


  const removeAuthorImage = (e) => {
    setAuthorImage("");
    setAuthorEditImg("");
  };


  const uploadEditedAuthImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setAuthorEditImg(response.data.data.fileSavedUrl));
  };

  //deleting author
  const deleteAuthor = async(author) => {
    console.log(author);
    let authorDelete ={
      author_obj_id: authorObjId,
      isActive:0,
    }

    await axios.post(`${API}/author/updateAuthor`, authorDelete)
    .then((response) => console.log(response))
    getAuthorsData();

    setOpenEditAuthorPopup(false);
    setAuthorDeletedSnackbarOpen(true);
  }

  //snackbar functions
  const closeAuthorCreatedSnackbar = () => {
    setAuthorCreatedSnackbarOpen(false);
  }

  const closeAuthorEditedSnackbar = () => {
    setAuthorEditedSnackbarOpen(false);
  }

  const closeAuthorDeletedSnackbar = () => {
    setAuthorDeletedSnackbarOpen(false);
  }

  const headingStyle = {
    "font-family": "Lato",
    "font-style": "normal",
    "font-weight": 600,
    "font-size": "16px",
    "line-height": "19px",
    color: "#333333",
  };

  return (
    <div className="authors__page__body">
      <div className="header">
        <Header />
      </div>


      <Snackbar
        open={authorCreatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeAuthorCreatedSnackbar}
      >
        <MuiAlert onClose={closeAuthorCreatedSnackbar} severity="success" variant="filled">
          New Author Created
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={authorEditedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeAuthorEditedSnackbar}
      >
        <MuiAlert onClose={closeAuthorEditedSnackbar} severity="success" variant="filled">
          Author Updated
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={authorDeletedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeAuthorDeletedSnackbar}
      >
        <MuiAlert onClose={closeAuthorDeletedSnackbar} severity="error" variant="filled">
          Author Deleted
        </MuiAlert>
      </Snackbar>

      
      <Dialog
        open={openAddAuthorPopup}
        onClose={closeAddAuthPopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Add Author</DialogTitle>
        <DialogContent>
          <div className="add__author__inputs">
            {" "}
            <label for="name">Full Name</label>
            <input
              id="name"
              type="text"
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="add__author__inputs">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              onChange={(e) => setAuthorEmail(e.target.value)}
            />
          </div>
          <div className="add__author__inputs">
            <label for="designation">Designation</label>
            <input
              id="designation"
              type="text"
              onChange={(e) => setAuthorDesignation(e.target.value)}
            />
          </div>
          <div className="add__author__inputs">
            <label for="description">Description</label>
            <br />
            <textarea
              id="description"
              name="description"
              type="text"
              onChange={(e) => setAuthorDescription(e.target.value)}
            />
          </div>

          <input
            type="file"
            id="file"
            className="author__img__upload"
            onChange={(e) => uploadAuthImg(e)}
          />
          <label for="file" className="author__img__upload__label">
            Add Image
          </label>

          <span className="image__preview">
            <div className="thumbnail">
              <Avatar
                variant="square"
                alt="Add Image"
                src={authorImage}
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "10px",
                }}
              />
              <span className="remove__img" onClick={(e) => removeAuthorImage(e)}>x</span>
            </div>
          </span>
        </DialogContent>
        <DialogActions>
          <button
            onClick={(e) => {
              addAuthor();
              closeAddAuthPopup();
            }}
            className="confirm__btn"
          >
            Add
          </button>
        </DialogActions>
      </Dialog>
      
      <Dialog
        open={openEditAuthorPopup}
        onClose={closeEditAuthPopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Edit Author</DialogTitle>
        <DialogContent>
          <div className="edit__author__inputs">
            <label for="name">Full Name</label>
            <input
              id="name"
              type="text"
              defaultValue={particularAuthor.author_name}
              onChange={(e) => setEditAuthorName(e.target.value)}
            />
          </div>
          <div className="edit__author__inputs">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              defaultValue={particularAuthor.auth_email}
              onChange={(e) => setAuthorEmail(e.target.value)}
            />
          </div>
          <div className="edit__author__inputs">
            <label for="designation">Designation</label>
            <input
              id="designation"
              type="text"
              defaultValue={particularAuthor.author_designation}
              onChange={(e) => setAuthorDesignation(e.target.value)}
            />
          </div>
          <div className="edit__author__inputs">
            <label for="description">Description</label>
            <textarea
              id="description"
              name="description"
              type="text"
              defaultValue={particularAuthor.author_description}
              onChange={(e) => setAuthorDescription(e.target.value)}
            />
          </div>

          <input
            type="file"
            id="file"
            className="author__img__upload"
            onChange={(e) => uploadEditedAuthImg(e)}
          />
          <label for="file" className="author__img__upload__label">
            Edit Image
          </label>

          <span className="image__preview">
            <div className="thumbnail">
              <Avatar
                variant="square"
                alt="Add Image"
                src={authorEditImg}
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "10px",
                }}
              />
              <span className="remove__img" onClick={(e) => removeAuthorImage(e)}>x</span>
            </div>
          </span>
        </DialogContent>
        <DialogActions>

        <button
            onClick={() => {
              deleteAuthor();
            }}
            className="delete__btn"
          >
            Delete
          </button>
          <button
            onClick={(e) => {
              editAuthor();
              closeEditAuthPopup();
            }}
            className="confirm__btn"
          >
            Edit
          </button>
        </DialogActions>
      </Dialog>
      
      <div className="authors__page__main__body">
        <div className="authors__page__table">
          <div className="authors__page__table__header">
            <p className="authors__page__table__header__text">Author</p>
            <span>
              <button className="add__author__btn" onClick={openAddAuthPopup}>
                Add Author
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Full Name</TableCell>
                  <TableCell style={headingStyle}>Email</TableCell>
                  <TableCell style={headingStyle}>Designation</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {authorsData.map((author, i) => (
                  <TableRow key={i + 1}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{author.author_name}</TableCell>
                    <TableCell>{author.auth_email}</TableCell>
                    <TableCell>{author.author_designation}</TableCell>
                    <TableCell>
                      <a href="#" onClick={() => openEditAuthPopup(author)}>
                        View & Edit
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default PromosPage;
