import { IconContext } from "react-icons";
import { TbMenu2,TbMessage2Plus,TbMessage2Question, TbMessage2Share, TbSmartHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

export default function Footer() {
  return (
    <IconContext.Provider value={{ size: "25" }}>
    <footer>
      <div className="lg:hidden w-screen fixed bottom-0 flex flex-row h-16 border-t bg-white justify-around pt-2">
      <CustomNavLink link={"/"} icon={<TbSmartHome />} content={"Home"}  />
      <CustomNavLink link={"/menu"}  icon={<TbMenu2 />} content={"Menu"}  />
      <CustomNavLink link={"/about"}  icon={<TbMessage2Question />} content={"About"}  />
          <CustomNavLink link={"/feedback"}  icon={<TbMessage2Plus />} content={"Review"}/>
          <CustomNavLink link={"/feedback-display"}  icon={<TbMessage2Share />} content={"Reviews"}/>
      </div>
    </footer>
    </IconContext.Provider>
  );
}
