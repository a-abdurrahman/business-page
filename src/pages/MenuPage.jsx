import DrinkCard from "../components/DrinkCard";
import drinksArray from "../assets/drinksArray";

export default function MenuPage() {
  return (
    <>
      {/* <div className="flex h-[14vh] shrink bg-white border-b"></div> */}
      <div className="flex grow shrink bg-[#f8f8f8] lg:px-10 lg:py-14 py-7 px-3">
        <div className="grid lg:grid-cols-2 grid-cols-1 overflow-y-scroll">
          {drinksArray.map((drink) => (
            <div className="p-5" key={drink.name}>
              <DrinkCard drink={drink} key={drink.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
