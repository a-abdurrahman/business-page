import { TbMenu2,TbMessage2Plus,TbMessage2Question, TbMessage2Share, TbSmartHome } from "react-icons/tb";
import CustomNavLink from "./CustomNavLink";
import { IconContext } from "react-icons";

export default function Sidebar() {
  return (
    <IconContext.Provider value={{ size: "30" }}>
      <div className="lg:flex flex-col border-r a lg:min-w-[15%] hidden">
        <div className="flex flex-col h-[50%] border-b pl-7 py-10 justify-between">
          <h1 className="font-semibold text-4xl italic">
            Teh'<span className="text-[#FFA16C] not-italic">Ceria</span>
          </h1>
          <div className="mb-16">
            <CustomNavLink link={"/"} content={"Home"} icon={<TbSmartHome />} />
            <CustomNavLink link={"/menu"} content={"Menu"} icon={<TbMenu2 />} />
          </div>
        </div>
        <div className="flex flex-col h-[50%] pl-7 justify-start pt-14 space-y-1">
          <CustomNavLink link={"/about"} content={"About"} icon={<TbMessage2Question />} />
          <CustomNavLink link={"/feedback"} content={"Review"} icon={<TbMessage2Plus />} />
          <CustomNavLink link={"/feedback-display"} content={"See Reviews"} icon={<TbMessage2Share />} />
        </div>
      </div>
    </IconContext.Provider>
  );
}
