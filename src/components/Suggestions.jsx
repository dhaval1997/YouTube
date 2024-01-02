import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";

const Suggestions = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    // console.log(data);
    setVideos(data.items);
  };

  return (
    <div className="flex flex-col">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <SuggestionCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Suggestions;
