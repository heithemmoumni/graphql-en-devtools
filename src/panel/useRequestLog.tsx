import React, { useState, createContext, useContext } from "react";

import { RequestLogContextProps, Request } from "./types";

const RequestLogContext = createContext<RequestLogContextProps>({
  requests: [],
  pushRequest: () => {},
  selected: null,
  handleSelect: () => {},
  flush: () => {}
});

export const useRequestLog = () => useContext(RequestLogContext);

export const RequestLogProvider = ({ children }) => {
  const [requests, setRequests] = useState<Array<Request>>([]);
  const [selected, setSelected] = useState<Request | null>(null);

  const pushRequest = (req: Request) => {
    setRequests(old => old.concat(req));
  };

  const handleSelect = (index: number) => {
    setSelected(requests[index]);
  };

  const flush = () => {
    setSelected(null);
    setRequests([]);
  };

  return (
    <RequestLogContext.Provider
      value={{ requests, pushRequest, selected, handleSelect, flush }}
    >
      {children}
    </RequestLogContext.Provider>
  );
};
