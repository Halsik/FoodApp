import React from "react";
import './Card.css'
import './flip-transition.css'


import backgroundCard from '../images/backgroundImage.avif'

function Card(props) {
    return(
        
        <div className="card-container" onClick={props.onClick}>
            <div className="card-back">
                <img draggable="false" className="background" src={backgroundCard} />
               <div className="card-details-header">
                    <h3>Ingredients</h3>
               </div>
               <div className="card-details-list">
                    <div className="card-details-list-box">
                        <p className="card-details-item">{props.ingredients}</p>
                        <p className="card-details-item">Honey 10ml</p>
                        <p className="card-details-item">Milk 200ml</p>
                        <p className="card-details-item">2x Bread</p>
                    </div>
                    <div className="card-details-list-box">
                        <p className="card-details-item">Sugar 50g</p>
                        <p className="card-details-item">Honey 10ml</p>
                        <p className="card-details-item">Milk 200ml</p>
                        <p className="card-details-item">2x Bread</p>
                    </div>
               </div>
               <div className="card-details-recipt">
                    <p className="card-details-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio explicabo possimus nesciunt recusandae deserunt dolore enim perspiciatis sunt voluptatem illo, impedit quibusdam obcaecati aspernatur, repellat maiores consequuntur officia sequi nisi.</p>
                    <br />
                    <p className="card-details-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nisi quae sint. Minima sint odio, numquam voluptate ad aperiam explicabo perferendis dignissimos similique eveniet natus, pariatur est necessitatibus odit nemo.</p>
                    <br />
                    <p className="card-details-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nisi quae sint. Minima sint odio, numquam voluptate ad aperiam explicabo perferendis dignissimos similique eveniet natus, pariatur est necessitatibus odit nemo.</p>
               </div>
            </div>
            <div className="card-front">
                <img src={props.coverImage} draggable="false" className="food-image-card"/>
            </div>
        </div>
    )
}

export default Card