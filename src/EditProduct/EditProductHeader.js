import React from "react";
import "./EditProductHeader.css";
import iconImage from "../Assets/Vector.jpg";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="edit__product__header__body">
      <div className="edit__product__header__text">
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <p style={{ marginLeft: "10px" }}>Edit Product</p>
      </div>

      <div className="edit__product__header__box">
        <div className="edit__product__header__box__icon">
          <img src={iconImage} alt="" />
        </div>
        <div className="edit__product__header__box__text">
          <p>
            X<br />
            Products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
