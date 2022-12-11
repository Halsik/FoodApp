import React, {useState, useEffect  } from "react";
import './Main.css'
import logo from '../images/logo.png'
import RightSide from "./RightSide";
import sliderPicOne from '../images/food1.avif'
import sliderPicTwo from '../images/food2.avif'
import sliderPicThree from '../images/food3.avif'
import sliderPicFour from '../images/food4.avif'
import sliderPicFive from '../images/food5.avif'


function Main() {


const arrayOfPhotos =[
    sliderPicOne, sliderPicTwo, sliderPicThree, sliderPicFour, sliderPicFive
]

const [slider, setSlider] = useState(0)

useEffect(() => {
    const interval = setTimeout(() => {
        setSlider(prevSlider => prevSlider + 1)
        if(slider >= 4) {
            setSlider(0)
        }
       
      }, 4000);
    return () => interval;
  }, );

    
    
    
  
    return(
        <div className="main-container">
            <div className="left-side">
                <RightSide 
                slides={arrayOfPhotos}
                numberOfSlide={slider}  
                />
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
