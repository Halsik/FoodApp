import React, {useState, useEffect  } from "react";
import './Main.css'
import logo from '../images/logo.png'
import RightSide from "./RightSide";
import sliderPicOne from '../images/dessert/dessertOne.avif'
import sliderPicTwo from '../images/breakfast/breakfastTwo.avif'
import sliderPicThree from '../images/dinner/dinnerTwo.avif'
import sliderPicFour from '../images/dessert/dessertTwo.avif'
import sliderPicFive from '../images/lunch/lunchFour.avif'


function Main(props) {


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
                    <button onClick={props.changeToBreakfast} className="main-button">Breakfast</button>
                    <button onClick={props.changeToLunch} className="main-button">Lunch</button>
                    <button onClick={props.changeToDinner} className="main-button">Dinner</button>
                    <button onClick={props.changeToDessert} className="main-button">Deserts</button>
                    <button onClick={props.changeToCoctails}className="main-button">Coctails</button>
                </div>

            </div>
        </div>
    )
}

export default Main
