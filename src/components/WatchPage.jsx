import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/generalSlice";
import VideoPlayer from "./VideoPlayer";
import { useSearchParams } from "react-router-dom";
import Suggestions from "./Suggestions";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [showChat, setShowChat] = useState(true);

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
        <div className="w-full mb-4">
          {showChat && <LiveChat />}
          <div className="w-full flex ml-4 justify-center rounded-3xl hover:bg-gray-200">
            <button
              data-testid="show-chat"
              onClick={() => setShowChat(!showChat)}
              className="w-full py-2 border bg-gray-50 rounded-3xl"
            >
              {showChat ? "Hide chat" : "Show chat"}
            </button>
          </div>
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
