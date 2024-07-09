import pancake from "../assets/meals/images/pancake-stack.jpg";
import mac from "../assets/meals/images/mac-and-cheese.jpg";
import { useState } from "react";

export default function MealItem({drink, onMouseEnter, onMouseLeave, hover }) {
  const imgSrc = "/drinks/" + drink.image+'.jpeg';
  console.log(imgSrc);
  return (
    <li
      className="md:w-[20vw] w-[60vw] md:h-[20vw] h-[60vw] flex"
      onMouseEnter={() => onMouseEnter(drink.name)}
      onMouseLeave={onMouseLeave}
    >
      {hover === drink.name ? (
        <div
          className="md:h-[25vw] h-[60vw] bg-contain"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <button></button>
        </div>
      ) : (
        <img src={imgSrc} alt={drink.name}  className=" flex grow object-contain object-center"/>
      )}
    </li>
  );
}
