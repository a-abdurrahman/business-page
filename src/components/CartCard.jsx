import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function CartCard({ cartItem, details }) {
  const CartCtx = useContext(CartContext);
  return (
    <div className="flex flex-row h-40 w-80 p-2 bg-white rounded-md shadow-md">
      <img
        src={`/drinks/${cartItem.id}.jpeg`}
        alt=""
        className="object-cover w-[33%] rounded-md"
      />
      <div className="flex flex-col grow p-5 justify-between">
        <h3 className=" font-medium text-base">{details.name}</h3>
        <p className="text-gray-500 text-sm">{cartItem.size}</p>
        <div className="flex flex-row h-[25%] justify-between items-center mt-2">
          <p >{`Rp ${
            cartItem.size === "small" ? details.smPrice : details.lgPrice
          }`}</p>
          <div className="flex flex-row gap-3 justify-center items-center">
            <button
              onClick={() =>
                CartCtx.addToCart(cartItem.id, cartItem.size, 1, details)
              }
            >
              <CiCirclePlus size={35} />
            </button>
            <p className=" font-medium">{cartItem.quantity}</p>
            <button
              onClick={() => CartCtx.removeFromCart(cartItem.id, cartItem.size)}
            >
              <CiCircleMinus size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
