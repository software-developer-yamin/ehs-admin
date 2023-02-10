import React from 'react'
import './EditProductHeader.css';
import iconImage from '../Assets/Vector.jpg';

function Header() {
    return (
        <div className="edit__product__header__body">
            <div className="edit__product__header__text">
                <p>Edit Product</p>
            </div>
       
            <div className="edit__product__header__box">
                <div className="edit__product__header__box__icon">
                   <img src={iconImage} alt=""/>
                </div>
                <div className="edit__product__header__box__text">
                    <p>X<br/>Products</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
