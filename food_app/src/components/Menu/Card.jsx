import React from "react";
import './Card.css'
import './flip-transition.css'
import foodImg from '../images/food3.avif'

function Card({onClick}) {
    return(
        <div className="card-container" onClick={onClick}>
            <div className="card-back">
               <h3>Ingiridients</h3>
               <ul>
                <li>lorem</li>
                <li>impsum</li>
                <li>lorem</li>
                <li>anga</li>
                <li>lalala</li>
               </ul>
            </div>
            <div className="card-front">
                <img draggable="false" className="food-image-card" src={foodImg}/>
            </div>
        </div>
    )
}

export default Card