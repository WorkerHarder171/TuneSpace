import { useState } from "react";
import { GoHomeFill, GoHome } from "react-icons/go";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoSearch, IoLibraryOutline, IoLibrary } from "react-icons/io5";
import {
  IoMdInformationCircleOutline,
  IoMdInformationCircle,
} from "react-icons/io";
import {
  AiOutlineFire,
  AiFillFire,
  AiOutlineSetting,
  AiFillSetting,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <GoHome />,
      activeIcon: <GoHomeFill />,
    },
    {
      path: "/popular",
      name: "Popular",
      icon: <AiOutlineFire />,
      activeIcon: <AiFillFire />,
    },
    {
      path: "/favorite",
      name: "Favorite",
      icon: <FaRegHeart />,
      activeIcon: <FaHeart />,
    },
    {
      path: "/search",
      name: "Search",
      icon: <IoSearch />,
      activeIcon: <IoSearch />,
    },
    {
      path: "/library",
      name: "Library",
      icon: <IoLibraryOutline />,
      activeIcon: <IoLibrary />,
    },
  ];

  return (
    <>
      <nav className="flex flex-col py-14 items-center relative w-3/12 bg-[#2A2A2A] text-white gap-28 z-20 h-screen">
        <div className="navbar-brand">
          <Link to="/" className="text-4xl font-semibold italic">
            Tune
            <span className="text-[#1dd760]">Space</span>
          </Link>
        </div>

        <ul className="navbar-nav flex flex-col gap-10">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`nav-link flex items-center gap-4 text-4xl duration-300 ${
                  active === item.name
                    ? "text-[#1dd760]"
                    : "hover:text-[#1dd760]"
                }`}
              >
                {active === item.name ? item.activeIcon : item.icon}
                <p className="text-2xl">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="interaction-user flex flex-col gap-7 justify-start items-start">
          <Link
            to="/setting"
            onClick={() => setActive("Settings")}
            className={`nav-link flex items-center gap-4 text-4xl duration-300 ${
              active === "Settings" ? "text-[#1dd760]" : "hover:text-[#1dd760]"
            }`}
          >
            {active === "Settings" ? <AiFillSetting /> : <AiOutlineSetting />}
            <p className="text-2xl">Settings</p>
          </Link>

          <Link
            to="/information"
            onClick={() => setActive("Information")}
            className={`nav-link flex items-center gap-4 text-4xl duration-300 ${
              active === "Information"
                ? "text-[#1dd760]"
                : "hover:text-[#1dd760]"
            }`}
          >
            {active === "Information" ? (
              <IoMdInformationCircle />
            ) : (
              <IoMdInformationCircleOutline />
            )}
            <p className="text-2xl">Information</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
