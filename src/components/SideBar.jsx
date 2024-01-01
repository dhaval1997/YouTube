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
    <>
      {isMenuOpen && (
        <div className="w-48 shadow">
          <div className="px-2 py-2">
            <h1 className="font-bold mb-2">Explore</h1>
            <ul>
              {listItems.map((item, index) => (
                <li
                  className="px-5 py-1.5 hover:bg-gray-100 cursor-pointer rounded-lg"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
