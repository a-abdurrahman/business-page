import { NavLink } from "react-router-dom";

export default function CustomNavLink({ link, icon, content }) {
  return (
    <NavLink to={link} style={({ isActive, isPending,}) => {
        return {
          color: isActive ? "#FFA16C" : "black",
        } }}>
      {({ isActive }) => (
        <div
          className={
            isActive
              ? " flex flex-row items-center py-1  border-[#FFA16C] border-r-4"
              : "flex flex-row items-center py-1 border-0"
          }
        >
          {icon}
          <p className="ml-5 text-lg">{content}</p>
        </div>
      )}
    </NavLink>
  );
}
