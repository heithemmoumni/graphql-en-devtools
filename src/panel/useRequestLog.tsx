import React, { useState, createContext, useContext } from "react";

import { RequestLogContextProps, Request } from "./types";

const RequestLogContext = createContext<RequestLogContextProps>({
  requests: [],
  pushRequest: () => {},
  selected: null,
  handleSelect: () => {},
});

export const useRequestLog = () => useContext(RequestLogContext);

export const RequestLogProvider = ({ children }) => {
  const [requests, setRequests] = useState<Array<Request>>([]);
  const [selected, setSelected] = useState<Request | null>(null);

  const pushRequest = (req: Request) => {
    setRequests((old) => old.concat(req));
  };

  const handleSelect = (index: number) => {
    setSelected(requests[index]);
  };

  return (
    <RequestLogContext.Provider
      value={{ requests, pushRequest, selected, handleSelect }}
    >
      {children}
    </RequestLogContext.Provider>
  );
};
