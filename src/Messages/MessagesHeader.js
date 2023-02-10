import React from 'react'
import './MessagesHeader.css';
import messageImage from '../Assets/messages.jpg';

function Header() {
    return (
        <div className="messages__header__body">
            <div className="messages__header__text">
                <p>Messages</p>
            </div>
       
            <div className="messages__header__box">
                <div className="messages__header__box__icon">
                   <img src={messageImage} alt=""/>
                </div>
                <div className="messages__header__box__text">
                    <p>X<br/>Messages</p>  
                </div>   
            </div>
        </div>
    )
}

export default Header
