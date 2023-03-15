/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Item from "../../components/Item/Item";
import useFetch from "../../hooks/useFetch";
import { KEY_PODCASTS } from "../../utils/constants";
import { getDataWithExpiry } from "../../utils/functions/getDataLocalStorage";
import { normalizedEpisodes } from "../../utils/functions/normalized";
import { urlGetPodcastById } from "../../utils/functions/urls";
import "./Podcasts.scss";

const Podcasts = ({ changeStatus }) => {
  const { podcastId } = useParams();
  const DateNow = new Date();
  const dataLocalStorage = JSON.parse(localStorage.getItem(podcastId));

  const [podcastData, setPodcastData] = useState({});
  const [dataEpisodes, setDataEpisodes] = useState(dataLocalStorage?.data);

  const { data: dataFetch, request, fetchStatus } = useFetch();
  const fetchEpisodes = () => {
    request(urlGetPodcastById(podcastId));
  };

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem(KEY_PODCASTS));
    setPodcastData(
      data.find((item) => {
        return item.id === podcastId;
      })
    );
    getDataWithExpiry(
      changeStatus,
      fetchStatus,
      dataEpisodes,
      setDataEpisodes,
      fetchEpisodes,
      dataLocalStorage?.expiry,
      normalizedEpisodes,
      dataFetch?.results,
      DateNow,
      podcastId
    );
  }, [fetchStatus]);
  return (
    <div className="podcasts">
      <Item
        internalPage
        id={podcastData.id}
        author={podcastData.author}
        name={podcastData.name}
        image={podcastData.image}
        description={podcastData.description}
      />
    </div>
  );
};

Podcasts.propTypes = {
  changeStatus: PropTypes.func,
};
Podcasts.defaultProps = {
  changeStatus: () => {},
};

export default Podcasts;
