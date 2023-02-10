import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {

    const linkStyle = {
        'color': 'white',
        'text-decoration': 'none'
    }
    return (
        <div className="sidebar">
           <button className="add__product__button">
              <Link style={{color:"#13375B",textDecoration:"none"}} to='/' > Add Product </Link>
           </button>

           <div className="sidebar__text">
                <Link style={linkStyle} to='/'><p>HOME</p></Link> 
                <Link style={linkStyle} to='/products'><p>PRODUCTS</p></Link> 
                <Link style={linkStyle} to='/banners'><p>BANNERS</p></Link>
                <Link style={linkStyle} to='/orders'><p>ORDERS</p></Link>
                <Link style={linkStyle} to='/vendors'><p>VENDORS</p></Link>
                <Link style={linkStyle} to='/promos'><p>PROMO & DISCOUNTS</p></Link>
                <Link style={linkStyle} to='/authors'><p>AUTHORS</p></Link>
                <Link style={linkStyle} to='/categories'><p>CATEGORIES</p></Link>
                <Link style={linkStyle} to='/messages'><p>MESSAGES</p></Link>
                <Link style={linkStyle} to='/users'><p>USERS</p></Link>
                <Link style={linkStyle} to='/settings'><p>SETTINGS</p></Link>
                <Link style={linkStyle} to='/addmaterial'><p>Add MAT & DIM</p></Link>
                <Link style={linkStyle} to='/addimage'><p>Add Image</p></Link>
                <Link style={linkStyle} to='/print'><p>Printing Detail</p></Link>
                <Link style={linkStyle} to='/uniqueid'><p>Generate Id</p></Link>
                <Link style={linkStyle} to='/uploadBulk'><p>Bulk Upload</p></Link>
           </div> 
    </div>

    )
}

export default Sidebar


