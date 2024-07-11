import { Link } from "react-router-dom";
import { icedTea } from "../assets/photos";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="flex grow lg:flex-row flex-col-reverse basis-[100vh]">
        <div className="flex grow ">
          <div className="px-[12.5%] flex flex-col h-full justify-evenly">
            <p className="text-xl text-gray-600 md:block hidden">
              <Link to={"/"}>Home / </Link>
              <span className=" text-black">About</span>
            </p>
            <div className="">
              <h2 className="font-semibold text-5xl italic mb-8">About Us</h2>
              <p className="text-xl italic ">
                Nestled in the heart of the bustling city, our cold drink shop
                is a sanctuary for those looking for a refreshing drink.
                Specializing in a iced teas, we pride ourselves on crafting
                beverages that are as pure as they are delicious. Our commitment
                to health and quality means that every drink we serve is free
                from artificial sweeteners, coloring, and preservatives.{" "}
                <p className="md:block hidden mt-8">
                  Instead, we rely on the natural sweetness of carefully
                  selected teas and the vibrant flavors of fresh, organic
                  ingredients. Whether you're craving a classic iced black tea,
                  or a fruity iced lemon tea, our shop
                  offers a revitalizing escape with each sip, making it the
                  perfect place to chill and rejuvenate.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex grow lg:max-w-[50%] max-w-full justify-center items-center">
          <img
            src={icedTea}
            alt=""
            className="object-contain lg:object-bottom object-center"
          />
        </div>
      </div>
    </div>
  );
}
