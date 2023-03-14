/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { millisToMinutesAndSeconds } from "../../utils/functions/convert";
import "./Episodes.scss";

const Episodes = ({ dataEpisodes, podcastId }) => {
  return (
    <div className="episodes">
      <div className="episodes__counter">
        <p className="episodes__counter--text">
          Episodes: {dataEpisodes?.length}
        </p>
      </div>

      <table className="episodes__table">
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        {dataEpisodes?.map(({ name, duration, releaseDate, id }) => (
          <tr key={id}>
            <th>
              <Link to={`/podcast/${podcastId}/episode/${id}`}>{name}</Link>
            </th>
            <th>{new Date(releaseDate).toISOString().substring(0, 10)}</th>
            <th>{millisToMinutesAndSeconds(duration)}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Episodes;
