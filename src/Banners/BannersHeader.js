import React from 'react'
import './BannersHeader.css';
import bannerImage from '../Assets/banner.jpg';

function Header() {
    return (
        <div className="banners__header__body">
            <div className="banners__header__text">
                <p>Banners</p>
            </div>
       
            <div className="banners__header__box">
                <div className="banners__header__box__icon">
                   <img src={bannerImage} alt=""/>
                </div>
                <div className="banners__header__box__text">
                    <p>X<br/>Banners</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
