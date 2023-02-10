import React, {useEffect,useState} from "react";
import Header from "./OrdersListHeader";
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
import "./OrdersList.css";

function OrdersList() {

  const [ordersData, setOrdersData] = useState([]);
  const [openOrderPopup, setOpenOrderPopup] = useState(false);
  const [particularOrder, setParticularOrder] = useState({});


  useEffect(() => {
    const getOrdersData = async () => {
      await axios
        .get(`${API}/orders/getOrdersAdmin`)
        .then((response) => setOrdersData(response.data.data))
        .catch((error) => {
          console.log(error);
        });
    };
    getOrdersData();
    console.log(ordersData);
  }, []);

  const openOrderDetailsPopup = async (order) => {
    console.log(order);
    setParticularOrder(order);
    setOpenOrderPopup(true);
  };

  const closeOrderDetailsPopup = () => {
    setOpenOrderPopup(false);
    console.log(particularOrder);
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
    <div className="orderslist__body">
      <div className="header">
        <Header />
      </div>

      <Dialog
        open={openOrderPopup}
        onClose={closeOrderDetailsPopup}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <>
            <div className="popup__header">
              <div>
                <p>ORDER # {particularOrder.orderId}</p>
                <p>CUSTOMER # {particularOrder.userId}</p>
              </div>
              <div>
                <p style={{"marginTop": "50px"}}>
                  Ordered on{" "}
                  {particularOrder.created_at?.substring(
                    0,
                    particularOrder.created_at.indexOf("T")
                  )}
                </p>
              </div>
            </div>

            <div className="customer__details">
              <div className="customer__details__left">
                <p className="customer__details__title">Customer Details</p>
                <p className="customer__details__text">Name:</p>
                <p className="customer__details__text">
                  Shipping Address: {particularOrder.address?.state},{" "}
                  {particularOrder.address?.country},{" "}
                  {particularOrder.address?.pincode}
                </p>
                <p className="customer__details__text">Contact Number :</p>
                <p className="customer__details__text">Email ID:</p>
              </div>
              <div className="customer__details__right">
                <p className="customer__details__title">Order Total : ₹ {particularOrder.sumPriceToPay}</p>
                <a href="#">View Invoice</a>
              </div>
            </div>
            <div className="order__details">
              <p className="order__details__title">Order Details</p>
              <div>
                {particularOrder.itemDetails?.map((singleItem) => (
                  <div className="order__details__content">
                    <span className="individual__item__details">
                      <Avatar
                        variant="square"
                        alt="Add Image"
                        src={singleItem.poster_details?.imgUrl[0]}
                        style={{
                          height: "140px",
                          width: "140px",
                        }}
                      />
                      <div>
                        <div className="individual__item__details__1">
                          {singleItem.poster_details?.name}
                        </div>
                        <div className="individual__item__details__2">
                          Material:{" "}
                          {singleItem.materialDimension?.material_title}
                        </div>
                        <div className="individual__item__details__2">
                          Dimension:{" "}
                          {singleItem.materialDimension?.dimension_title}
                        </div>
                        <div className="individual__item__details__2">
                          Price: ₹{singleItem.total}{" "}
                          Quantity: {singleItem.quantity}
                        </div>
                        <div className="individual__item__details__2">
                          Seller: Dichroic Labs
                        </div>
                      </div>
                    </span>
                    <div className="order__details__dropdown">
                      <span>
                        <label style={{"marginRight" : "10px"}}>Order Status</label>
                        <select></select>
                      </span>
                      <br />
                      <span>
                        <label>Assign Vendor</label>
                        <select></select>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order__upload__btn">
              <button>Upload</button>
            </div>
          </>
        </DialogContent>
      </Dialog>

      <div className="orderslist__main__body">
        <div className="orderslist__body__top">
          <form>
            <input type="text" placeholder="Search.." />
            <select name="status" id="status" />
          </form>
        </div>

        <div className="orderslist__body__bottom">
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={headingStyle}>#</TableCell>
              <TableCell style={headingStyle}>Order ID</TableCell>
              <TableCell style={headingStyle}>Date</TableCell>
              <TableCell style={headingStyle}>Customer ID</TableCell>
              <TableCell style={headingStyle}>Amount</TableCell>
              <TableCell style={headingStyle}>Status</TableCell>
              <TableCell style={headingStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order, i) => (
              <TableRow key={i + 1}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell className="order__id">
                  <span onClick={() => openOrderDetailsPopup(order)}>
                    {order.orderId}
                  </span>
                </TableCell>
                <TableCell>
                  {order.created_at.substring(0, order.created_at.indexOf("T"))}
                </TableCell>
                <TableCell>{order.userId}</TableCell>
                <TableCell>{order.sumPriceToPay}</TableCell>
                <TableCell>{order.orderStatus}</TableCell>
                <TableCell></TableCell>
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

export default OrdersList;
