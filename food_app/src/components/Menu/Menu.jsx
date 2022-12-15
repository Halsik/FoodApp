import React from "react";
import './Menu.css'
import FlipCard from "./Flip-card";
import foodData from "./foodData";
import Navbar from "./Navbar";




function Menu(props) {

    const foodArray = foodData.food.breakfast

    console.log(props.type)

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





    return(
       <div  className="menu-container">
            <Navbar />
            <div className="menu-card-container">
                {newFoodArray}
            </div>
            <div className="buttons">

            </div>
            
       </div>
    )
}


export default Menu