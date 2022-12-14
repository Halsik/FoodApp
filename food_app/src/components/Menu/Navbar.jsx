import React from "react";
import './Navbar.css'
import logo from '../images/logo.png'


function Navbar() {
    return(
        <div className="navbar-container">
            <div className="navbar-button">
                <button className="navbar-back">Main Menu</button>
            </div>
            <div className="navbar-section">
                <h1 className="navbar-header">Breakfast</h1>
            </div>
            <div className="navbar-logo">
                <img className="navbar-logo-image" src={logo}/>
                <h1 className="navbar-logo-text">Recepies App</h1>
            </div>

        </div>
    )
}

export default Navbar