import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function DrinkCard({
  drink,
  size = "small",
  onChangeSize,
  addToCart,
  quantity,
  addQuantity,
  minusQuantity
}) {
  return (
    <div className=" flex flex-row bg-white rounded-xl shadow-md p-2 h-60">
      <div className="flex flex-col grow w-[33%]">
        <img
          src={`/drinks/${drink.image}.jpeg`}
          alt=""
          className=" object-cover rounded-lg h-[75%]"
        />
        <div className="flex flex-row h-[25%] justify-center items-center gap-2 mt-2">
          <button onClick={() => addQuantity(drink.image)}>
            <CiCirclePlus size={35} />
          </button>
          <p className=" font-medium">{quantity ? quantity : 1}</p>
          <button onClick={() => minusQuantity(drink.image)}>
            <CiCircleMinus size={35} />
          </button>
        </div>
      </div>

      <div className="flex flex-col px-5 pt-2 justify-between w-[66%]">
        <div className="flex flex-row gap-5">
          <h3 className=" font-medium text-base">{drink.name}</h3>
          <h4 className="font-semibold text-[#FFA16C]">{`Rp ${
            size === "small" ? drink.smPrice : drink.lgPrice
          }`}</h4>
        </div>

        <p className="flex flex-grow items-center mb-2">{drink.desc}</p>
        <div className="flex flex-row justify-around font-medium mb-2">
          <button
            onClick={() => {
              onChangeSize(drink.image, "small");
            }}
            className={`rounded-full border-2 py-1.5 px-5 ${
              size === "small" ? "bg-black text-white" : null
            }`}
          >
            Small
          </button>
          <button
            onClick={() => {
              onChangeSize(drink.image, "large");
            }}
            className={`rounded-full border-2 py-1.5 px-5 ${
              size === "large" ? "bg-black text-white" : null
            }`}
          >
            Large
          </button>
        </div>
        <div className="flex flex-row h-[23%] p-0.5">
          <button
            onClick={() => addToCart(drink.image, size, quantity||1, drink)}
            className="flex flex-grow border border-[#FFA16C] rounded-full items-center justify-center font-semibold text-[#FFA16C]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
