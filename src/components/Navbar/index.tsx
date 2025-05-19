import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";

const Navbar = ({ activeMenu }: { activeMenu: string }) => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center gap-5">
        <Link to={"/dashboard"}>
          <h2 className="text-lg md:text-xl font-medium text-black leading-5">
            Resume Builder
          </h2>
        </Link>

        <ProfileCard />
      </div>
    </div>
  );
};

export default Navbar;
