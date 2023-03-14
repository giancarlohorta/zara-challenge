import { STATUS_FETCH } from "../constants";

const putDataLocalStorage = (key, now, data) => {
  const dataLocalStorage = {
    data,
    expiry: now.getTime() + 86400000,
  };
  localStorage.setItem(key, JSON.stringify(dataLocalStorage));
};

export const getDataWithExpiry = (
  changeStatus,
  status,
  receivedData,
  setReceivedData,
  fetch,
  expiry,
  normalize,
  dataFetch,
  dateNow,
  keyLocalStorage
) => {
  changeStatus(status);
  if (status === STATUS_FETCH.INITIAL && !receivedData) fetch();
  if (status === STATUS_FETCH.DONE && !receivedData) {
    const normalizedDataResponse = normalize(dataFetch);
    setReceivedData(normalizedDataResponse);
    putDataLocalStorage(keyLocalStorage, dateNow, normalizedDataResponse);
  }
  if (receivedData && expiry < dateNow.getTime()) {
    localStorage.removeItem(keyLocalStorage);
    fetch();
  }
};
