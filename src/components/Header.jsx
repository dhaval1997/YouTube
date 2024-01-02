import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/generalSlice";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import logo from "../assets/pngwing.png";

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
    <div className="flex justify-between items-center px-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <LuMenu
          onClick={handleToggleMenu}
          className="text-2xl cursor-pointer text-gray-800"
        />
        <Link to="/">
          <img src={logo} className="h-14 cursor-pointer" alt="logo" />
        </Link>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="border outline-none focus:border-blue-500 rounded-l-full px-4 py-1 w-80"
        />
        <button className="border bg-gray-100 px-4 py-2 rounded-r-full focus:outline-none">
          <IoSearch />
        </button>
        {showSuggestions && (
          <ul className="absolute w-80 top-12 border rounded-lg border-gray-300 bg-white px-2 py-1 z-10">
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
