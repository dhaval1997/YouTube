const GOOGLE_API_KEY = "AIzaSyCCVKwlJSqEBxyCGnAek5GDi-GkGXqWAVg";
// "AIzaSyA-m-tUxfl0Do8HMgLHYm71cx8RSv1vVvY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_SUGGESTION_API_1 =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CHANNEL_DATA_API = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_VIDEOS_BY_CATEGORY = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&q=`;

export const YOUTUBE_VIDEO_BY_ID_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const dummyCommentData = [
  {
    name: "Alice",
    text: "Great post!",
    replies: [{ name: "Bob", text: "Thanks, Alice!", replies: [] }],
  },
  {
    name: "Jack",
    text: "Interesting topic!",
    replies: [
      {
        name: "Bob",
        text: "Thanks, Alice!",
        replies: [
          {
            name: "David",
            text: "This is interesting!",
            replies: [
              {
                name: "Charlie",
                text: "I agree with both of you!",
                replies: [],
              },
              {
                name: "David",
                text: "This is interesting!",
                replies: [
                  {
                    name: "Charlie",
                    text: "I agree with both of you!",
                    replies: [],
                  },
                  {
                    name: "David",
                    text: "This is interesting!",
                    replies: [
                      {
                        name: "David",
                        text: "This is interesting!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Alice",
    text: "Great post!",
    replies: [
      {
        name: "Bob",
        text: "Thanks, Alice!",
        replies: [
          {
            name: "Charlie",
            text: "I agree with both of you!",
            replies: [],
          },
          {
            name: "David",
            text: "This is interesting!",
            replies: [],
          },
        ],
      },

      {
        name: "Kelly",
        text: "I enjoyed reading this.",
        replies: [],
      },
      {
        name: "Jack",
        text: "Interesting topic!",
        replies: [
          {
            name: "Bob",
            text: "Thanks, Alice!",
            replies: [
              {
                name: "Charlie",
                text: "I agree with both of you!",
                replies: [],
              },
              {
                name: "David",
                text: "This is interesting!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Kelly",
        text: "I enjoyed reading this.",
        replies: [
          {
            name: "Bob",
            text: "Thanks, Alice!",
            replies: [
              {
                name: "Charlie",
                text: "I agree with both of you!",
                replies: [],
              },
              {
                name: "David",
                text: "This is interesting!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Eve",
        text: "I have a different perspective on this.",
        replies: [],
      },
    ],
  },
  {
    name: "john",
    text: "some random comments",
    replies: [
      {
        name: "john",
        text: "some random comments",
        replies: [
          {
            name: "john",
            text: "some random comments",
            replies: [
              {
                name: "Jack",
                text: "Interesting topic!",
                replies: [],
              },
              {
                name: "Kelly",
                text: "I enjoyed reading this.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "john",
        text: "some random comments",
        replies: [],
      },
    ],
  },
  {
    name: "Frank",
    text: "Nice work!",
    replies: [
      {
        name: "Bob",
        text: "Thanks, Alice!",
        replies: [
          {
            name: "Charlie",
            text: "I agree with both of you!",
            replies: [],
          },
          {
            name: "David",
            text: "This is interesting!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Grace",
    text: "Keep it up!",
    replies: [
      {
        name: "Hank",
        text: "I love the content you're producing.",
        replies: [
          {
            name: "Ivy",
            text: "Me too! It's awesome.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jack",
    text: "Interesting topic!",
    replies: [],
  },
  {
    name: "Kelly",
    text: "I enjoyed reading this.",
    replies: [
      {
        name: "Bob",
        text: "Thanks, Alice!",
        replies: [
          {
            name: "Charlie",
            text: "I agree with both of you!",
            replies: [],
          },
          {
            name: "David",
            text: "This is interesting!",
            replies: [],
          },
        ],
      },
    ],
  },
];
