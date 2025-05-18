import React from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const { user, clearUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    clearUser();
    localStorage.clear();
    navigate("/");
  };
  return (
    user && (
      <div className="flex items-center">
        <img
          src={user?.profileImageUrl}
          alt="profile"
          className="w-11 h-11 bg-gray-300 rounded-full mr-3"
        />
        <div>
          <div className="text-[15px] font-bold leading-3">{user.name}</div>
          <button
            className="text-purple-600 text-sm font-semibold cursor-pointer hover:opacity-80 duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
