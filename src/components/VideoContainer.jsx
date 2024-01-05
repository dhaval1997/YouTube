import { Link } from "react-router-dom";
import Shimmer from "../ui/Shimmer";
import VideoCard from "./VideoCard";
import useVideoData from "../hooks/useVideoData";

const VideoContainer = () => {
  const { videos, loading } = useVideoData();

  return loading ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
