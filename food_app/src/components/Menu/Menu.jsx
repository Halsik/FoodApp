import React from "react";
import './Menu.css'
import FlipCard from "./Flip-card";


function Menu() {

    return(
       <div className="menu-container">
        <div className="menu-header">
            <h1>Toast</h1>
        </div>
            <FlipCard />
            
       </div>
    )
}


export default Menu