import React from "react";
import { useSelector } from "react-redux";

const listItems = [
  "Shorts",
  "Trending",
  "Music",
  "Movies",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Learning",
  "Podcasts",
];

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.general.isMenuOpen);

  return (
    <div className={`w-48 shadow ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="px-4 py-3">
        <h1 className="font-bold text-lg mb-2">Explore</h1>
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
