import { TbMailForward, TbMenu2, TbMoodHeart, TbMoodSearch, TbSmartHome } from "react-icons/tb";
import CustomNavLink from "./CustomNavLink";
import { IconContext } from "react-icons";

export default function Sidebar() {
  return (
    <IconContext.Provider value={{ size: "30" }}>
      <div className="flex flex-col border-r a md:min-w-[15%]">
        <div className="flex flex-col h-[50%] border-b pl-7 py-10 justify-between">
          <h1 className="font-semibold text-4xl italic">
            Boba'<span className="text-[#FFA16C] not-italic">Ceria</span>
          </h1>
          <div className="mb-16">
            <CustomNavLink link={"/"} content={"Home"} icon={<TbSmartHome />} />
            <CustomNavLink link={"/menu"} content={"Menu"} icon={<TbMenu2 />} />
          </div>
        </div>
        <div className="flex flex-col h-[50%] pl-7 justify-start pt-14 space-y-1">
          <CustomNavLink link={"/about"} content={"About"} icon={<TbMoodSearch />} />
          <CustomNavLink link={"/feedback"} content={"Feedback"} icon={<TbMailForward />} />
        </div>
      </div>
    </IconContext.Provider>
  );
}
