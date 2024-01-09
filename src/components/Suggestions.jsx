import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import { ShimmerVertical } from "../ui/Shimmer";
import useVideoData from "../hooks/useVideoData";

const Suggestions = () => {
  const { videos, loading } = useVideoData();

  return loading ? (
    <ShimmerVertical />
  ) : (
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
