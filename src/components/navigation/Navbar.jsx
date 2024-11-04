import pp from "@/assets/pp.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center py-16 justify-between w-[80%] h-24 bg-[#2A2A2A] text-white absolute z-20 text-white">
        <div className="wrapper flex items-center w-8/12 pl-10">
          <div className="wrapper-action flex gap-6 items-center">
            <button className="action-button-left text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <FaAngleLeft />
            </button>
            <button className="action-button-right text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <FaAngleRight />
            </button>
          </div>
          <ul className="navbar-nav flex justify-around items-center w-8/12">
            <li className="navbar-item">
              <a
                href="#"
                className="navbar-link duration-300 text-2xl text-white font-semibold duration-300 text-[#9D9B99] hover:text-white active:text-semibold active:text-white "
              >
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Podcast
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Playlist
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Release
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Genres
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Artist
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link duration-300 text-lg duration-300 text-[#9D9B99] hover:text-white">
                Albums
              </a>
            </li>
          </ul>
        </div>

        <div className="information-user">
          <div className="card flex justify-evenly gap-7 items-center px-10">
            <p className="user-name font-semibold text-xl">John Doe</p>
            <img src={pp} alt={""} width={60} className="rounded-full text-white"/>
          </div>
        </div>
      </nav>
    </>
  );
}
