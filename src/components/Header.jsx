import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.jpg";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import NavModal from "./NavModal";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    function openNavModal() {
        setOpenModal(true)
    }
    function closeNavModal() {
        setOpenModal(false)
    }
  return (
    <header className="flex flex-row lg:h-24 md:shrink-0 shrink bg-[#F5F5F5] justify-between md:px-20 px-10 fixed top-0 w-full text-[#333333]">
      {/*Logo*/}

      <div className="flex flex-row items-center" onClick={closeNavModal}>
        <Link to={"/"} className="flex flex-row items-center">
          <img
            src={logoImg}
            alt=""
            className=" h-14 object-contain rounded-[50%] border-2 border-orange-500"
          />
          <h1 className="font-semibold text-4xl">Boba Ceria</h1>
        </Link>
      </div>

      <div className="lg:flex text-3xl font-medium space-x-10 items-center hidden">
        <NavLink to={"/"}>
          <p>The Menu</p>
        </NavLink>
        <NavLink to={"/about"}>
          <p>About Us</p>
        </NavLink>
        <NavLink to={"/booking"}>
          <p>Booking</p>
        </NavLink>
      </div>

      <div className="lg:hidden flex justify-center scale-150" >
        <button onClick={openModal?closeNavModal:openNavModal}>
          <CgMenu className=" align-middle scale-150"/>
        </button>
      </div>

      {/*NavBar => Modal*/}
      <NavModal open={openModal} handleClose={closeNavModal}/>
    </header>
  );
}
