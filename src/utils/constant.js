const YOUTUBE_API_KEY = "AIzaSyA-m-tUxfl0Do8HMgLHYm71cx8RSv1vVvY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_SUGGESTION_API_1 =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

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
