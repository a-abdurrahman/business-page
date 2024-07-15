import {
  TbArrowNarrowRight,
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandTwitterFilled,
} from "react-icons/tb";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className=" bg-[url('/timothy-newman-_ZH-GRbh0iE-unsplash.jpg')] flex grow h-screen bg-center bg-cover text-white">
      <div className="flex flex-row grow backdrop-filter backdrop-brightness-50 items-center justify-between md:p-20 p-10">
        <div className="flex flex-col grow h-full">
          <h1 className="md:text-7xl text-5xl font-bold leading-tight">
            <span className="italic">Welcome to <br /></span> Teh Ceria
          </h1>
          <h1 className="md:text-7xl text-5xl font-bold leading-tight mt-4 mb-4">
            A Cool Break <br className="md:block hidden"/> from a Hot Day
          </h1>
          <p className="md:text-xl font-light">
            We rely on the natural sweetness of carefully selected teas and the
            vibrant flavors of fresh, organic ingredients.
          </p>
          <div className="flex gap-6  mt-5">
            <button className="flex w-fit h-fit px-7 py-3 rounded-3xl gap-2 justify-center items-center md:text-base text-sm bg-[#FFA16C] text-black">
              <Link to={"/menu"} className=" font-semibold">
                Our Menu
              </Link>
              <TbArrowNarrowRight size={20} />
            </button>
            <button className=" italic">
              <Link to={"/about"} className=" font-semibold">
                Learn More...
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-[40%] h-full"></div>
      </div>
    </div>
  );
}

{
  /*
    <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Welcome to Teh Ceria -</h1>
          <h1 className="text-5xl font-bold">A Cool Break from a Hot Day</h1>
          <h2 className="text-xl">
            We Serve All Natural Iced Teas | Explore Our Refreshing Drinks
          </h2>
        </div>
        <div className="flex grow h-full justify-between w-full items-center">
          <div>
            <h3 className="text-xl ">Our Advantages</h3>
            <ul className="list-disc">
              <li>Varying levels of Sweetness</li>
              <li>All-Natural</li>
              <li>No Artificial Coloring</li>
            </ul>
          </div>
          <div>
            <Link to={"/menu"} className="text-xl underline">
              Our Menu
            </Link>
          </div>
          <div></div>
        </div>
        <div className="flex flex-row w-full justify-around">
          <Link to={"/about"} className=" font-semibold">
            About
          </Link>
          <div className="flex flex-row gap-2">
            <a href="">
              <TbBrandTwitterFilled size={20} />
            </a>
            <a href="">
              <TbBrandFacebookFilled size={20} />
            </a>
            <a href="">
              <TbBrandInstagram size={20} />
            </a>
          </div>
        </div>*/
}
