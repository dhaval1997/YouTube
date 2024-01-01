import logo from "../assets/pngwing.png";
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/generalSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <LuMenu
          onClick={handleToggleMenu}
          className="text-2xl cursor-pointer text-gray-800"
        />
        <Link to='/'><img src={logo} className="h-14 cursor-pointer" alt="logo" /></Link>
      </div>
      <div className="flex items-center">
        <input className="border border-gray-300 outline-gray-400 rounded-l-full px-4 py-1 w-80" />
        <button className="border border-gray-300 bg-gray-100 px-4 py-2 rounded-r-full">
          <IoSearch />
        </button>
      </div>
      <div className="flex items-center">
        <FaUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
