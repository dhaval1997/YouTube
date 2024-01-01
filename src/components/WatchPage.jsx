import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/generalSlice";
import VideoPlayer from "./VideoPlayer";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'));

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
