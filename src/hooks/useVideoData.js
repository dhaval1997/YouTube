import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const useVideoData = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  return { videos, loading };
};

export default useVideoData;
