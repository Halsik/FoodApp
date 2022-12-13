import React, {useState} from "react";
import './Flip-card.css'
import Card from "./Card";
import {CSSTransition} from 'react-transition-group'


function FlipCard() {

    const [cardSide, setCardSide] = useState(true)

    return (
        <div className="flip-card-container" o>
            <CSSTransition
            in={cardSide}
            timeout={300}
            classNames='flip'>
                <Card onClick={() => {
                    setCardSide(prevCardSide => !prevCardSide)
                }}/>
            </CSSTransition>
        </div>
    )
}

export default FlipCard