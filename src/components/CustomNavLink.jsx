import { NavLink } from "react-router-dom";

export default function CustomNavLink({ link, icon, content='' }) {
  return (
    <NavLink to={link} style={({ isActive, isPending,}) => {
        return {
          color: isActive ? "#FFA16C" : "black",
        } }}>
      {({ isActive }) => (
        <div
          className={
            isActive
              ? " flex lg:flex-row lg:grow-0 grow flex-col items-center lg:justify-start justify-center py-1  border-[#FFA16C] lg:border-r-4 border-t-3"
              : "flex lg:flex-row lg:grow-0 grow flex-col items-center py-1 lg:justify-start justify-center border-0"
          }
        >
          {icon}
          <p className="lg:ml-5 ml-0 lg:text-lg text-sm">{content}</p>
        </div>
      )}
    </NavLink>
  );
}
