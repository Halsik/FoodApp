import { useState } from 'react';
import './App.css';
import Main from './components/MainPage/Main';
import Menu from './components/Menu/Menu';
import foodData from "./components/Menu/foodData"


function App() {



  const [typeOfMeal, setTypeOfMeal] = useState(foodData.food.lunch)
  const [headerMeal, setHeaderMeal] = useState("Dessert")

  const changeToDinner = () => {
    setTypeOfMeal(foodData.food.dinner)
    setHeaderMeal("Dinner")
    foodData.food.breakfast.push("blablabla")
    console.log(foodData.food.breakfast)
  }

  const changeToBreakfast = () => {
    setTypeOfMeal(foodData.food.breakfast)
    setHeaderMeal("Breakfast")
  }
  const changeToLunch = () => {
    setTypeOfMeal(prevTypeOfMeal => foodData.food.lunch)
    setHeaderMeal("Lunch")
  }
  const changeToDessert = () => {
    setTypeOfMeal(foodData.food.dessert)
    setHeaderMeal("Desserts")
  }
  const changeToCoctails = () => {
    setTypeOfMeal(foodData.food.coctails)
    setHeaderMeal("Coctails")
  }

  console.log(typeOfMeal)

  return (
    <div className="App">
      <Main 
      changeToDinner={changeToDinner}
      changeToLunch={changeToLunch}
      changeToBreakfast={changeToBreakfast}
      changeToDessert={changeToDessert}
      changeToCoctails={changeToCoctails}/>
      {/* <Menu 
      type={typeOfMeal}
      header={headerMeal}/> */}
    </div>
  );
}

export default App;
