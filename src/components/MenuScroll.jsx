import { useState } from "react";
import availableMeals from "../assets/availableMeals";
import drinksArray from "../assets/drinksArray";
import MealItem from "./MealItem";

export default function MenuScroll() {
    const [hover, setHover] = useState(false)

    function handleMouseEnter(id){
        setHover(id)
    }
    function handleMouseLeave(){
        setHover(false)
    }
    return(
        <div className="flex flex-row overflow-auto max-w-[90vw] mt-20">
        <ul className="flex flex-row gap-3">
          {drinksArray.map((drinks) => (
            <MealItem key={drinks.name} drink={drinks} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  hover={hover}/>
          ))}
        </ul>
      </div> 
    )
}