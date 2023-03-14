import axios from "axios";
import { useCallback, useState } from "react";
import { STATUS_FETCH } from "../utils/constants";

const useFetch = () => {
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState(STATUS_FETCH.INITIAL);

  const request = useCallback(async (url) => {
    setFetchStatus(STATUS_FETCH.LOADING);
    try {
      const { data } = await axios.get(url);
      setData(data);
      setFetchStatus(STATUS_FETCH.DONE);
    } catch (e) {
      setFetchStatus(STATUS_FETCH.ERROR);
      console.log(e);
    }
  }, []);

  return { data, fetchStatus, request };
};

export default useFetch;
