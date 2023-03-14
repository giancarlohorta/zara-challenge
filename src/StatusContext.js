import { createContext, useState } from "react";
import { STATUS_FETCH } from "./utils/constants";

export const StatusContext = createContext(STATUS_FETCH.INITIAL);

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(STATUS_FETCH.INITIAL);

  function changeStatus(data) {
    setStatus(data);
  }
  return (
    <StatusContext.Provider value={{ status, changeStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
