import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get('v'));
  return (
    <div>
      <iframe
        data-testid="iframe"
        width="980"
        height="520"
        src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?autoplay=1&mute=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
