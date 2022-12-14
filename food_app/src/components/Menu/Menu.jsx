import React from "react";
import './Menu.css'
import FlipCard from "./Flip-card";
import foodData from "./foodData";
import Navbar from "./Navbar";

const foodArray = foodData.food.breakfast

const newFoodArray = foodArray.map(item => {
    return (
        <FlipCard 
        id={item.id}
        key={item.id}
        name={item.name}
        ingredients={item.ingredients}
        coverImage={item.img}
        />

    )
})


function Menu() {

    return(
       <div className="menu-container">
            <Navbar />
            <div className="menu-card-container">
                {newFoodArray}
            </div>
            
       </div>
    )
}


export default Menu