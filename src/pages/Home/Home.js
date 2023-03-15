/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { PropTypes } from "prop-types";
import SearchInput from "../../components/SearchInput";
import useFetch from "../../hooks/useFetch";
import { KEY_PODCASTS, PODCASTS_LIMIT } from "../../utils/constants";
import { getDataWithExpiry } from "../../utils/functions/getDataLocalStorage";
import { normalizedDataPodcasts } from "../../utils/functions/normalized";
import { urlAllTopPodcasts } from "../../utils/functions/urls";

const Home = ({ changeStatus }) => {
  const dataLocalStorage = JSON.parse(localStorage.getItem(KEY_PODCASTS));
  const DateNow = new Date();
  const [keyword, setKeyword] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState(
    dataLocalStorage?.data
  );
  const [normalizedData, setNormalizedData] = useState(dataLocalStorage?.data);
  const { data, request, fetchStatus } = useFetch();

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
  }, [fetchStatus, normalizedData]);

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

Home.propTypes = {
  changeStatus: PropTypes.func,
};
Home.defaultProps = {
  changeStatus: () => {},
};

export default Home;
