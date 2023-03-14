/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import SearchInput from "../../components/SearchInput";
import useFetch from "../../hooks/useFetch";
import { StatusContext } from "../../StatusContext";
import { KEY_PODCASTS, PODCASTS_LIMIT } from "../../utils/constants";
import { getDataWithExpiry } from "../../utils/functions/getDataLocalStorage";
import { normalizedDataPodcasts } from "../../utils/functions/normalized";
import { urlAllTopPodcasts } from "../../utils/functions/urls";

const Home = () => {
  const dataLocalStorage = JSON.parse(localStorage.getItem(KEY_PODCASTS));
  const DateNow = new Date();
  const [keyword, setKeyword] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState(
    dataLocalStorage?.data
  );
  console.log(filteredPodcasts);
  const [normalizedData, setNormalizedData] = useState(dataLocalStorage?.data);
  const { data, request, fetchStatus } = useFetch();

  const { changeStatus } = useContext(StatusContext);

  const handleChange = (value) => {
    if (value) {
      setFilteredPodcasts(
        normalizedData.filter(
          (user) =>
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.author.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredPodcasts(normalizedData);
    }
    setKeyword(value);
  };

  const fetchPodcasts = () => {
    request(urlAllTopPodcasts(PODCASTS_LIMIT));
  };

  useEffect(() => {
    getDataWithExpiry(
      changeStatus,
      fetchStatus,
      normalizedData,
      setNormalizedData,
      fetchPodcasts,
      dataLocalStorage?.expiry,
      normalizedDataPodcasts,
      data?.feed?.entry,
      DateNow,
      KEY_PODCASTS
    );
    if (normalizedData) setFilteredPodcasts(normalizedData);
  }, [fetchStatus]);

  return (
    <div>
      <SearchInput
        onChange={handleChange}
        numberPodcasts={filteredPodcasts?.length}
        keyword={keyword}
      />
      <ItemList list={filteredPodcasts} />
    </div>
  );
};

export default Home;
