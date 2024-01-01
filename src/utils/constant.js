const YOUTUBE_API_KEY = "AIzaSyA-m-tUxfl0Do8HMgLHYm71cx8RSv1vVvY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_SUGGESTION_API_1 =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
