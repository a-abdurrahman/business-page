import DrinkCard from "../components/DrinkCard";
import drinksArray from "../assets/drinksArray";
import { itemSize } from "../assets/drinksArray";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";

const sizeObj = {};
export default function MenuPage() {
  const [drinkSize, setDrinkSize] = useState({ ...itemSize });
  const [drinkQuantity, setDrinkQuantity] = useState({})
  
  const CartCtx = useContext(CartContext)

  function handleChangeSize(id, size) {
    setDrinkSize((prevState) => ({
      ...prevState,
      [id]: size,
    }));
    console.log(drinkSize);
  }

  function addQuantity(qID) {
    setDrinkQuantity((prevQuantity)=>{
      const updatedQuantity = {...prevQuantity}
      if (prevQuantity[qID]){
        updatedQuantity[qID] = prevQuantity[qID] + 1
      } else {
        updatedQuantity[qID] = 2
      }
      console.log(updatedQuantity)
      return updatedQuantity 
    })
  }

  function minusQuantity(qID) {
    setDrinkQuantity((prevQuantity)=>{
      const updatedQuantity = {...prevQuantity}
      if (prevQuantity[qID] > 1){
        updatedQuantity[qID] = prevQuantity[qID] - 1
      } else {
        updatedQuantity[qID] = 1
      }
      return updatedQuantity 
    })
  }

  return (
    <div className="flex flex-col">
      <button onClick={CartCtx.openCart}>Open Cart</button>
      <div className="flex grow shrink bg-[#f8f8f8] h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 overflow-y-scroll gap-5 lg:px-6 lg:py-10 py-7 px-3">
          {drinksArray.map((drink) => (
            <DrinkCard
              drink={drink}
              key={drink.name}
              size={drinkSize[drink.image]}
              onChangeSize={handleChangeSize}
              addToCart={CartCtx.addToCart}
              quantity={drinkQuantity[drink.image]}
              addQuantity={addQuantity}
              minusQuantity={minusQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
