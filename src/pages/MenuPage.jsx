import DrinkCard from "../components/DrinkCard";
import drinksArray from "../assets/drinksArray";

export default function MenuPage() {
  return (
    <>
      <div className="flex h-[14vh] shrink bg-white border-b"></div>
      <div className="flex h-[86vh] shrink bg-[#f8f8f8] px-10 py-14">
        <div className="grid grid-cols-2 overflow-y-scroll">
          {drinksArray.map((drink) => (
            <div className="p-5">
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
