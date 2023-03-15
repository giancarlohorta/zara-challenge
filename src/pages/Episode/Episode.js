import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import "./Episode.scss";

const Episode = ({ dataEpisodes }) => {
  const { episodeId } = useParams();
  const [dataEpisode, setDataEpisode] = useState({});
  useEffect(() => {
    setDataEpisode(
      dataEpisodes.find((episode) => {
        return episode.id === parseInt(episodeId);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="episode">
      <div className="episode__content">
        <h2 className="episode__content--title">{dataEpisode?.name}</h2>
        <p className="episode__content--description">
          {dataEpisode?.description || "No Description"}
        </p>
      </div>
      <audio
        className="episode__audio"
        controls
        aria-label="Audio Player"
        role="region"
        src={dataEpisode?.episodeUrl}
      />
    </div>
  );
};

Episode.propTypes = {
  dataEpisodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      duration: PropTypes.number,
      description: PropTypes.string,
      episodeUrl: PropTypes.string,
      releaseDate: PropTypes.string,
    })
  ),
};
Episode.defaultProps = {
  dataEpisodes: [],
};

export default Episode;
