import React from 'react'
import './ProductsListHeader.css';
import iconImage from '../Assets/Vector.jpg';

function Header({count}) {
    return (
        <div className="product__list__header__body">
            <div className="product__list__header__text">
                <p>All Products</p>
            </div>
       
            <div className="product__list__header__box">
                <div className="product__list__header__box__icon">
                   <img src={iconImage} alt=""/>
                </div>
                <div className="product__list__header__box__text">
                    <p>{count}<br/>Products</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
