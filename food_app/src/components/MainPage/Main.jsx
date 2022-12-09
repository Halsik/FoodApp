import React from "react";
import './Main.css'
import logo from '../images/logo.png'
import foodPic from '../images/food1.avif'

function Main() {


    return(
        <div className="main-container">
            <div className="left-side">
                <img className="food-poster" src={foodPic}/>
            </div>
            <div className="right-side">
                <div className="main-header-container">
                    <img className="main-logo" src={logo}/>
                    <h1 className="main-header">Recepies App</h1>
                </div>
                <div className="main-button-container">
                    <button className="main-button">Breakfast</button>
                    <button className="main-button">Lunch</button>
                    <button className="main-button">Dinner</button>
                    <button className="main-button">Deserts</button>
                    <button className="main-button">Coctails</button>
                </div>

            </div>
        </div>
    )
}

export default Main
