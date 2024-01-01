import logo from "../assets/pngwing.png";
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/generalSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    console.log("API called:- ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex justify-between px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <LuMenu
          onClick={handleToggleMenu}
          className="text-2xl cursor-pointer text-gray-800"
        />
        <Link to="/">
          <img src={logo} className="h-14 cursor-pointer" alt="logo" />
        </Link>
      </div>
      <div className="flex flex-wrap relative items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="border border-gray-300 outline-gray-400 rounded-l-full px-4 py-1 w-80"
        />
        <button className="border border-gray-300 bg-gray-100 px-4 py-2 rounded-r-full">
          <IoSearch />
        </button>
        {showSuggestions && (
          <ul className="absolute w-80 rounded-lg border border-gray-300 px-2 py-1 bg-white top-12 z-10">
            {suggestions.map((s) => (
              <li
                key={s}
                className="hover:bg-gray-100 px-2 cursor-pointer flex items-center justify-between rounded-md py-0.5"
              >
                {s}
                <IoSearch />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center">
        <FaUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
