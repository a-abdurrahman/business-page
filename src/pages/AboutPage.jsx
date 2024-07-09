import { Link } from "react-router-dom";
import { coffee } from "../assets/photos";

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
                From humble beginnings, hidden away in Smeaton Grange, Dizy's
                has evolved into an island escape within The HUB of Gregory
                Hills. This transformation has turned Dizy's into a vibrant
                oasis, offering a serene retreat from the everyday hustle and
                bustle.{" "}
                <p className="md:block hidden mt-8">
                  Nestled in the heart of the community, Dizy's provides a
                  perfect blend of relaxation and indulgence, making it an ideal
                  destination to unwind and enjoy your time. Whether you're
                  seeking a peaceful refuge or a lively social spot, Dizy's
                  caters to all, inviting guests to experience a slice of
                  paradise in the bustling city.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex grow lg:max-w-[50%] max-w-full justify-center items-center">
          <img
            src={coffee}
            alt=""
            className="object-contain lg:object-bottom object-center"
          />
        </div>
      </div>
      <div className="flex basis-[100vh]">

      </div>
    </div>
  );
}
