import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "../Navbar";

const DashboardLayout = ({
  children,
  activeMenu,
}: {
  children: React.ReactNode;
  activeMenu: string;
}) => {
  const user = useContext(UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu} />
      {user && <div className="container mx-auto pt-4 pb-4">{children}</div>}
    </div>
  );
};

export default DashboardLayout;
