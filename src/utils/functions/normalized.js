export const normalizedDataPodcasts = (data) => {
  return data?.map((podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      author: podcast["im:artist"].label,
      image: podcast["im:image"][2].label,
      name: podcast["im:name"].label,
      description: podcast.summary.label,
    };
  });
};

export const normalizedEpisodes = (data) => {
  return data?.map(
    ({
      trackId,
      trackName,
      trackTimeMillis,
      releaseDate,
      episodeUrl,
      description,
    }) => {
      return {
        id: trackId,
        name: trackName,
        duration: trackTimeMillis,
        releaseDate,
        episodeUrl,
        description,
      };
    }
  );
};
