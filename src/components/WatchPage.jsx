import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/generalSlice";
import VideoPlayer from "./VideoPlayer";
import { useSearchParams } from "react-router-dom";
import Suggestions from "./Suggestions";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex mx-8 my-6">
      <div className="flex-1 mr-8">
        <VideoPlayer />
        <Comments />
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <LiveChat />
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

