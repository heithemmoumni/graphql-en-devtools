import React from "react";

import { Header, Body, Operation } from "./styled";
import { useRequestLog } from "./useRequestLog";

const OperationSection = () => {
  const requestsLog = useRequestLog();

  const { requests, handleSelect } = requestsLog;

  return (
    <div>
      <Header>Operations</Header>
      <Body>
        {requests.map((req, index) => (
          <Operation
            key={`${req.operation}-${index}`}
            onClick={() => handleSelect(index)}
          >
            {index + 1}. {req.operation}
          </Operation>
        ))}
      </Body>
    </div>
  );
};

export default OperationSection;
