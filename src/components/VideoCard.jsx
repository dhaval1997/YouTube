const VideoCard = ({ video }) => {
  console.log(video);

  const { snippet, statistics, contentDetails } = video;
  return (
    <div className="w-72 m-2 pl-2 pt-2">
      <div className="rounded-xl relative ">
        <img
          className="rounded-lg w-72"
          src={snippet?.thumbnails?.medium?.url}
        />
        <span className="absolute bottom-2 right-2 opacity-80 rounded-md px-1 w-18 text-white bg-gray-700">
          {decodeDuration(contentDetails.duration)}
        </span>
      </div>
      <div>
        <h1 className="">{snippet.title}</h1>
        <p className="font-light text-sm">{snippet.channelTitle}</p>
        <div className="flex justify-between">
          <span className="font-light text-sm">
            {formatViewCount(statistics.viewCount)} views{" "}
          </span>
          <span className="font-light text-sm">
            {timeAgo(snippet.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

function timeAgo(dateString) {
  const currentDate = new Date();
  const publishDate = new Date(dateString);
  const timeDifference = currentDate - publishDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else if (days < 30) {
    return days + " days ago";
  } else if (months < 12) {
    return months + " months ago";
  } else {
    return years + " years ago";
  }
}

function formatViewCount(viewCount) {
  const count = parseInt(viewCount);

  if (count >= 1000000) {
    const millionCount = (count / 1000000).toFixed(1);
    return millionCount + "m";
  } else {
    return count.toString();
  }
}

function decodeDuration(durationString) {
  const durationRegex = /PT(?:(\d+)M)?(?:(\d+)S)?/;
  const match = durationString.match(durationRegex);

  if (!match) {
    throw new Error("Invalid duration string format");
  }

  const minutes = match[1] ? parseInt(match[1]) : 0;
  const seconds = match[2] ? parseInt(match[2]) : 0;

  const totalSeconds = minutes * 60 + seconds;

  const timestamp = new Date(0);
  timestamp.setSeconds(totalSeconds);

  return timestamp.toISOString().substr(11, 8);
}