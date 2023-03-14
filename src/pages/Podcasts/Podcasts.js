/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Item from "../../components/Item/Item";
import useFetch from "../../hooks/useFetch";
import { INTERNAL_ROUTES } from "../../routes";
import { StatusContext } from "../../StatusContext";
import { KEY_PODCASTS } from "../../utils/constants";
import { getDataWithExpiry } from "../../utils/functions/getDataLocalStorage";
import { normalizedEpisodes } from "../../utils/functions/normalized";
import { urlGetPodcastById } from "../../utils/functions/urls";
import "./Podcasts.scss";

const Podcast = () => {
  const { podcastId } = useParams();
  const DateNow = new Date();
  const dataLocalStorage = JSON.parse(localStorage.getItem(podcastId));

  const [podcastData, setPodcastData] = useState({});
  const [dataEpisodes, setDataEpisodes] = useState(dataLocalStorage?.data);

  const { data: dataFetch, request, fetchStatus } = useFetch();

  const { changeStatus } = useContext(StatusContext);

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
      <Routes>
        {INTERNAL_ROUTES.map(({ key, component: Component, path }) => {
          return (
            <Route
              key={key}
              path={path}
              element={
                <Component dataEpisodes={dataEpisodes} podcastId={podcastId} />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Podcast;
