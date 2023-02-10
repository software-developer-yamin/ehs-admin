import React from 'react'
import './OrdersListHeader.css';
import cartImage from '../Assets/cart.jpg';

function Header() {
    return (
        <div className="orders__list__header__body">
            <div className="orders__list__header__text">
                <p>Orders</p>
            </div>
       
            <div className="orders__list__header__box">
                <div className="orders__list__header__box__icon">
                   <img src={cartImage} alt=""/>
                </div>
                <div className="orders__list__header__box__text">
                    <p>X<br/>Orders</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
