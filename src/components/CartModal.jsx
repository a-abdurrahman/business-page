import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { CiCircleRemove } from "react-icons/ci";
import CartCard from "./CartCard";
import drinksArray from "../assets/drinksArray";

export default function CartModal() {
  const cartCtx = useContext(CartContext);

  return (
    <dialog
      className="h-full w-full p-32 bg-transparent backdrop-filter backdrop-brightness-50 flex items-center justify-center"
      open={cartCtx.cartIsOpen}
      onClose={cartCtx.closeCart}
    >
      <div className=" bg-[#f8f8f8] fit-content min-h-96 min-w-[90rem] ">
        <button className="absolute top-2 right-2" onClick={cartCtx.closeCart}>
          <CiCircleRemove />
        </button>
        <div className="grid grid-cols-4 p-2 gap-5">
          {!cartCtx.items[0] ? (
            <p>Sorry, there is no item in the cart.</p>
          ) : (
            cartCtx.items.map((item) => (
              <CartCard
                cartItem={item}
                key={item.id + "-" + item.size}
                details={item.drink}
              />
            ))
          )}
        </div>
      </div>
    </dialog>
  );
}
