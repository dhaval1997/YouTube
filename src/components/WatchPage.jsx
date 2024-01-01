import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/generalSlice";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <VideoPlayer />
    </div>
  );
};

export default WatchPage;
