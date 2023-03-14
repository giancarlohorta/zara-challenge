export const urlAllTopPodcasts = (limit) =>
  `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`;

export const urlGetPodcastById = (id) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`
  )}`;
