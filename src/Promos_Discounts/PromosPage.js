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
import Header from "./PromosPageHeader";
import "./PromosPage.css";

function PromosPage() {
  const [promosData, setPromosData] = useState([]);
  const [openAddCpnPopup, setOpenAddCpnPopup] = useState(false);
  const [openEditCpnPopup, setOpenEditCpnPopup] = useState(false);
  const [couponObjId, setCouponObjId] = useState();
  const [particularCoupon, setParticularCoupon] = useState([]);
  const [couponName, setCouponName] = useState();
  const [couponCode, setCouponCode] = useState();
  const [editCouponCode, setEditCouponCode] = useState();
  const [couponImage, setCouponImage] = useState();
  const [couponEditImg, setCouponEditImg] = useState();
  const [startDateForEdit,setStartDateForEdit] = useState();
  const [endDateForEdit,setEndDateForEdit] = useState();
  const [couponEditDiscountType, setCouponEditDiscountType] = useState();
  const [couponDiscountType, setCouponDiscountType] = useState();
  const [couponDiscountValue, setCouponDiscountValue] = useState();
  const [couponStartTime, setCouponStartTime] = useState();
  const [couponEndTime, setCouponEndTime] = useState();
  const [couponCreatedSnackbarOpen, setCouponCreatedSnackbarOpen] =
    useState(false);
  const [couponEditedSnackbarOpen, setCouponEditedSnackbarOpen] =
    useState(false);
  const [couponDeletedSnackbarOpen, setCouponDeletedSnackbarOpen] =
    useState(false);

  const getPromosData = async () => {
    await axios
      .get(`${API}/coupons/getCoupon`)
      .then((response) => setPromosData(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPromosData();
  }, []);

  const openAddCouponPopup = () => {
    setOpenAddCpnPopup(true);
    setCouponImage("");
    console.log(promosData);
  };

  const closeAddCouponPopup = () => {
    setOpenAddCpnPopup(false);
  };

  const openEditCouponPopup = (promo) => {
    setEditCouponCode("");
    console.log(promo);
    setCouponObjId(promo._id);
    setCouponEditImg(promo.coupon_image);
    setStartDateForEdit(new Date(promo.start_time).toISOString().substr(0,10));
    setEndDateForEdit(new Date(promo.end_time).toISOString().substr(0,10));
    setCouponEditDiscountType(promo.coupon_discount_type);
    setParticularCoupon(promo);
    setOpenEditCpnPopup(true);
  };

  const closeEditCouponPopup = () => {
    setOpenEditCpnPopup(false);
  };

  const editCoupon = async () => {
    let updCpnData={};
   if(editCouponCode === undefined){
     updCpnData = {
      coupon_obj_id: couponObjId,
      coupon_name: couponName,
      coupon_image: couponEditImg,
      coupon_discount_type: couponEditDiscountType,
      discountValue: couponDiscountValue,
      start_time: couponStartTime,
      end_time: couponEndTime,
    };
   } else if(editCouponCode !== undefined){
    updCpnData = {
      coupon_obj_id: couponObjId,
      coupon_name: couponName,
      coupon_code: editCouponCode,
      coupon_image: couponEditImg,
      coupon_discount_type: couponEditDiscountType,
      discountValue: couponDiscountValue,
      start_time: couponStartTime,
      end_time: couponEndTime,
    };
   }

    await axios
      .post(`${API}/coupons/updateCoupon`, updCpnData)
      .then((response) => console.log(response));
    getPromosData();

    setCouponEditedSnackbarOpen(true);
  };

  const setStartTime = (e) => {
    let startDate = e.target.value;
    let startTime = new Date(startDate).getTime();
    console.log(startTime);
    setCouponStartTime(startTime);
  };

  const setEndTime = (e) => {
    let endDate = e.target.value;
    let endTime = new Date(endDate).getTime();
    console.log(endTime);
    setCouponEndTime(endTime);
  };

  const uploadCpnImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setCouponImage(response.data.data.fileSavedUrl));
  };

  const uploadEditedCpnImg = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append("imgUrl", file);

    await axios
      .post(`${API}/posters/uploadFile`, formData)
      .then((response) => setCouponEditImg(response.data.data.fileSavedUrl));
  };

  const addCoupon = async () => {
    let cpnData = {
      coupon_name: couponName,
      coupon_code: couponCode,
      coupon_image: couponImage,
      coupon_discount_type: couponDiscountType,
      discountValue: couponDiscountValue,
      start_time: couponStartTime,
      end_time: couponEndTime,
    };

    await axios
      .post(`${API}/coupons/createCoupon`, cpnData)
      .then((response) => console.log(response));
    getPromosData();

    setCouponCreatedSnackbarOpen(true);
  };

  const removeCouponImg = (e) => {
    setCouponImage("");
    setCouponEditImg("");
  };

//delete promo functions
  const deleteCoupon = async (promo) => {
    console.log(promo);
    let cpnDelete = {
      coupon_obj_id: couponObjId,
      isActive: 0,
    };

    await axios
      .post(`${API}/coupons/updateCoupon`, cpnDelete)
      .then((response) => console.log(response));
    getPromosData();

    setOpenEditCpnPopup(false);
    setCouponDeletedSnackbarOpen(true);
  };
  
//snackbar functions
  const closeCouponCreatedSnackbar = () => {
    setCouponCreatedSnackbarOpen(false);
  };

  const closeCouponEditedSnackbar = () => {
    setCouponEditedSnackbarOpen(false);
  };

  const closeCouponDeletedSnackbar = () => {
    setCouponDeletedSnackbarOpen(false);
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
    <div className="promos__page__body">
      <div className="header">
        <Header />
      </div>

      <Snackbar
        open={couponCreatedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeCouponCreatedSnackbar}
      >
        <MuiAlert
          onClose={closeCouponCreatedSnackbar}
          severity="success"
          variant="filled"
        >
          New Coupon Created
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={couponEditedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeCouponEditedSnackbar}
      >
        <MuiAlert
          onClose={closeCouponEditedSnackbar}
          severity="success"
          variant="filled"
        >
          Coupon Updated
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={couponDeletedSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeCouponDeletedSnackbar}
      >
        <MuiAlert
          onClose={closeCouponDeletedSnackbar}
          severity="error"
          variant="filled"
        >
          Coupon Deleted
        </MuiAlert>
      </Snackbar>

      <Dialog
        open={openAddCpnPopup}
        onClose={closeAddCouponPopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Add Promo</DialogTitle>
        <DialogContent>
          <div className="promo__form">
            <div className="add__promo__inputs">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                onChange={(e) => setCouponName(e.target.value)}
              />
            </div>
            <div className="add__promo__inputs">
              {" "}
              <label for="code">Promo Code</label>
              <input
                id="code"
                type="text"
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>
            <div className="add__promo__inputs">
              <label for="start__date">Start Date</label>
              <input
                id="start__date"
                type="date"
                onChange={(e) => setStartTime(e)}
              />
            </div>
            <div className="add__promo__inputs">
              <label for="end__date">End Date</label>
              <input
                id="end__date"
                type="date"
                onChange={(e) => setEndTime(e)}
              />
            </div>
            <div className="add__promo__inputs">
              <label for="type">Type</label>
              <span>
                <input
                  id="type"
                  type="radio"
                  name="type"
                  onChange={() => {
                    setCouponDiscountType(2);
                  }}
                />
                Percentage(%)
              </span>
              <span>
                <input
                  id="type"
                  type="radio"
                  name="type"
                  onChange={() => {
                    setCouponDiscountType(1);
                  }}
                />
                Amount(Rs.)
              </span>
            </div>
            <div className="add__promo__inputs">
              <label for="value">Promo Value</label>
              <input
                id="value"
                type="number"
                name="type"
                onChange={(e) => setCouponDiscountValue(e.target.value)}
              />
            </div>
            <input
              type="file"
              id="file"
              className="coupon__img__upload"
              onChange={(e) => uploadCpnImg(e)}
            />
          </div>
          <label for="file" className="coupon__img__upload__label">
            Add Image
          </label>
          <span className="image__preview">
            <div className="thumbnail">
              <Avatar
                variant="square"
                alt="Add Image"
                src={couponImage}
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "10px",
                }}
              />
              <span className="remove__img" onClick={(e) => removeCouponImg(e)}>x</span>
            </div>
          </span>
        </DialogContent>
        <DialogActions>
          <button
            onClick={(e) => {
              addCoupon();
              closeAddCouponPopup();
            }}
            className="confirm__btn"
          >
            Add
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEditCpnPopup}
        onClose={closeEditCouponPopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Edit Promo</DialogTitle>
        <DialogContent>
          <div className="promo__form">
            <div className="edit__promo__inputs">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                defaultValue={particularCoupon.coupon_name}
                onChange={(e) => setCouponName(e.target.value)}
              />
            </div>
            <div className="edit__promo__inputs">
              <label for="code">Promo Code</label>
              <input
                id="code"
                type="text"
                defaultValue={particularCoupon.coupon_code}
                onChange={(e) => setEditCouponCode(e.target.value)}
              />
            </div>
            <div className="edit__promo__inputs">
              <label for="start__date">Start Date</label>
              <input
                id="start__date"
                type="date"
                defaultValue = {startDateForEdit}
                onChange={(e) => setStartTime(e)}
              />
            </div>
            <div className="edit__promo__inputs">
              <label for="end__date">End Date</label>
              <input
                id="end__date"
                type="date"
                defaultValue={endDateForEdit}
                onChange={(e) => setEndTime(e)}
              />
            </div>
            <div className="edit__promo__inputs">
              <label for="type">Type</label>
              <span>
                <input
                  id="type"
                  type="radio"
                  name="type"
                  checked={couponEditDiscountType === 2}
                  onChange={() => {
                    setCouponEditDiscountType(2);
                  }}
                />
                Percentage(%)
              </span>
              <span>
                <input
                  id="type"
                  type="radio"
                  name="type"
                  checked = {couponEditDiscountType === 1}
                  onChange={() => {
                    setCouponEditDiscountType(1);
                  }}
                />
                Amount(Rs.)
              </span>
            </div>
            <div className="edit__promo__inputs">
              <label for="value">Promo Value</label>
              <input
                id="value"
                type="text"
                name="type"
                defaultValue={particularCoupon.discountValue}
                onChange={(e) => setCouponDiscountValue(e.target.value)}
              />
            </div>
            <input
              type="file"
              id="file"
              className="coupon__img__upload"
              onChange={(e) => uploadEditedCpnImg(e)}
            />
            <label for="file" className="coupon__img__upload__label">
              Edit Image
            </label>

            <span className="image__preview">
              <div className="thumbnail">
                <Avatar
                  variant="square"
                  alt="Add Image"
                  src={couponEditImg}
                  style={{
                    height: "100px",
                    width: "100px",
                    marginRight: "10px",
                  }}
                />
                <span
                  className="remove__img"
                  onClick={(e) => removeCouponImg(e)}
                >
                  x
                </span>
              </div>
            </span>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => {
              deleteCoupon();
            }}
            className="delete__btn"
          >
            Delete
          </button>

          <button
            onClick={(e) => {
              editCoupon();
              closeEditCouponPopup();
            }}
            className="confirm__btn"
          >
            Edit
          </button>
        </DialogActions>
      </Dialog>
      <div className="promos__page__main__body">
        <div className="promos__page__table">
          <div className="promos__page__table__header">
            <p className="promos__page__table__header__text">Promo Codes</p>
            <span>
              <button className="add__promo__btn" onClick={openAddCouponPopup}>
                Add Promo
              </button>
            </span>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={headingStyle}>#</TableCell>
                  <TableCell style={headingStyle}>Name</TableCell>
                  <TableCell style={headingStyle}>Code</TableCell>
                  <TableCell style={headingStyle}>Start-Date</TableCell>
                  <TableCell style={headingStyle}>End-Date</TableCell>
                  <TableCell style={headingStyle}>Type</TableCell>
                  <TableCell style={headingStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {promosData.map((promo, i) => (
                  <TableRow key={i + 1}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell>{promo.coupon_name}</TableCell>
                    <TableCell>{promo.coupon_code}</TableCell>
                    <TableCell>
                      {new Date(promo.start_time).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(promo.end_time).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{promo.coupon_discount_type}</TableCell>
                    <TableCell>
                      <a href="#" onClick={() => openEditCouponPopup(promo)}>
                        Edit
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
