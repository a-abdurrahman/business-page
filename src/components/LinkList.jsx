import { NavLink } from "react-router-dom";

export default function LinkList({handleClose}) {
  return (
    <>
      <NavLink to={"/"}>
        <p onClick={handleClose}>The Menu</p>
      </NavLink>
      <NavLink to={"/about"}>
        <p onClick={handleClose}>About Us</p>
      </NavLink>
      <NavLink to={"/booking"}>
        <p onClick={handleClose}>Booking</p>
      </NavLink>
    </>
  );
}
