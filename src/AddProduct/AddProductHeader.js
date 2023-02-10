import React from 'react'
import './AddProductHeader.css';
import iconImage from '../Assets/Vector.jpg';

function Header() {
    return (
        <div className="add__product__header__body">
            <div className="add__product__header__text">
                <p>Add Product</p>
            </div>
       
            <div className="add__product__header__box">
                <div className="add__product__header__box__icon">
                   <img src={iconImage} alt=""/>
                </div>
                <div className="add__product__header__box__text">
                    <p>X<br/>Products</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
