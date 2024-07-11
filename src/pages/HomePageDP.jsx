import { frenchToast, pizza, plaque } from "../assets/photos";
import availableMeals from "../assets/availableMeals";
import MealItem from "../components/MealItem";
import MenuScroll from "../components/MenuScroll";

export default function HomePage() {
  return (
    <div className=" flex bg-[#F5F5F5]">
      <ul className="flex flex-col max-w-[100vw] bg-[#F5F5F5]">
        <li className="flex md:flex-row grow flex-col lg:h-[85vh] lg:px-20 space-y-10  bg-[#F5F5F5] mt-32 mb-10">
          <img
            src={"/drinks/jasmine-tea.jpeg"}
            alt=""
            className="flex grow w-full shrink object-contain object-top lg:h-[100vh] md:max-w-[50vw] max-w-[100vw]
            "
          />
          <div className="flex grow basis-1/2 justify-center items-center md:py-0 py-10">
            <div className="flex flex-col grow justify-center items-center space-y-5">
              <h3 className="text-3xl">
                Welcome to <strong>Boba Ceria</strong>
              </h3>
              <h1 className=" lg:text-9xl text-5xl md:font-normal font-semibold">
                Minuman
                <br />
                Berbeda
                <br />
              </h1>
              <p className="text-2xl">
                Everyday, <strong>from 8am-8pm</strong>
              </p>
            </div>
          </div>
        </li>
        <li className="lg:basis-[105vh] basis-[100vh] grow shrink h-fit justify-center flex flex-col md:px-20 px-10 md:pt-20  pt-5 my-5 bg-[#F5F5F5]">
          <div className="flex lg:flex-row flex-col md:justify-between">
            <div className="flex flex-col justify-between">
              <p className="text-2xl">High Quality & Locally Sourced</p>
              <h2 className="text-6xl font-semibold">Our Menu</h2>
            </div>
            <div className="flex flex-col lg:w-[25%] text-xl">
              <p>
                We serve cold drinks without artificial coloring, sweeteners, or
                preservatives. <br />
                Click on the menus to know more about each drink's ingredients.
              </p>
            </div>
          </div>
          {/*Menu List*/}
          <MenuScroll />
          <div className="flex justify-center items-center py-10">
            <button className="bg-[#e1e1e1] fit-content px-10 py-5 text-2xl font-semibold" >
            See Menu
          </button>
          </div>
          
        </li>
        <li className="flex md:flex-row grow flex-col-reverse basis-[100vh]  bg-[#ebebeb]">
          <div className="flex grow basis-1/2 justify-center items-center">
            <div className="flex flex-col md:w-[66%] md:mx-0 mx-10 mb-10 md:my-0 mt-10">
              <div className=" space-y-3 italic">
                <h3 className="text-3xl">Who We Are</h3>
                <h2 className=" font-semibold text-7xl">EST.2024</h2>
                <p className="text-xl">
                  Nestled in the heart of the bustling city, our cold drink shop
                  is a sanctuary for those looking for a refreshing drink. Specializing in a
                  iced teas, we pride ourselves on crafting
                  beverages that are as pure as they are delicious. Our
                  commitment to health and quality means that every drink we
                  serve is free from artificial sweeteners, coloring, and
                  preservatives.
                </p>
              </div>
              <button className="bg-[#e0e0e0] text-2xl fit-content px-10 py-5 mt-8 text-black font-semibold self-start not-italic">
                Read More
              </button>
            </div>
          </div>
          <div className="flex grow basis-1/2 md:mx-20 ">
            <img
              src={plaque}
              alt=""
              className="flex grow shrink object-contain md:object-center object-top md:max-w-[100%] max-w-[100vw] \"
            />
          </div>
        </li>
        
        <li className="basis-[100vh] grow flex md:flex-row flex-col md:bg-gradient-to-r from-[#F5F5F5] md:from-50% to-[#ebebeb] md:pb-0 pb-10">
          <div className="flex  grow basis-1/2 md:max-w-[50%] w-[100%] md:mx-20">
            <img
              src={pizza}
              alt=""
              className="object-contain object-center"
            />
          </div>
          <div className="flex grow basis-1/2 justify-center items-center">
            <div className="flex flex-col w-[66%] space-y-7 italic">
              <h3 className="text-3xl">Locations</h3>
              <h2 className=" font-semibold text-7xl">A Cold Drink <br /> when Needed</h2>
              <p className="text-xl">
                From humble beginnings, hidden away in Smeaton Grange, Dizy's
                has evolved into an island escape within The HUB of Gregory
                Hills. Transporting you to an oasis, Dizy's is the perfect place
                to spend your days.
              </p>
              <button className="bg-[#e0e0e0] text-2xl p-5   text-black font-semibold not-italic">
                See Map
              </button>
            </div>
          </div>
        </li>
        <li className="flex md:flex-row grow flex-col-reverse basis-[100vh] bg-[#ebebeb]">
          <div className="flex grow basis-1/2 justify-center items-center">
            <div className="flex flex-col md:w-[66%] md:mx-0 mx-10 mb-10 md:my-0 mt-10">
              <div className=" space-y-3 italic">
                <h3 className="text-3xl">Feedback</h3>
                <h2 className=" font-semibold text-7xl">EST.2024</h2>
                <p className="text-xl">
                  Nestled in the heart of the bustling city, our cold drink shop
                  is a sanctuary for those looking for a refreshing drink. Specializing in a
                  iced teas, we pride ourselves on crafting
                  beverages that are as pure as they are delicious. Our
                  commitment to health and quality means that every drink we
                  serve is free from artificial sweeteners, coloring, and
                  preservatives.
                </p>
              </div>
              <button className="bg-[#e0e0e0] text-2xl fit-content px-10 py-5 mt-8 text-black font-semibold self-start not-italic">
                Read More
              </button>
            </div>
          </div>
          <div className="flex grow basis-1/2 md:mx-20 ">
            <img
              src={plaque}
              alt=""
              className="flex grow shrink object-contain md:object-center object-top md:max-w-[100%] max-w-[100vw] \"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
