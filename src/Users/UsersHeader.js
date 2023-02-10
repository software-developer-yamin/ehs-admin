import React from 'react'
import './UsersHeader.css';
import usersImage from '../Assets/users.jpg';

function Header() {
    return (
        <div className="users__header__body">
            <div className="users__header__text">
                <p>Users</p>
            </div>
       
            <div className="users__header__box">
                <div className="users__header__box__icon">
                   <img src={usersImage} alt=""/>
                </div>
                <div className="users__header__box__text">
                    <p>X<br/>Users</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
