import React, {useState} from "react";

import { Header, Body, Operation } from "./styled";
import { useRequestLog } from "./useRequestLog";

const OperationSection = () => {
  const requestsLog = useRequestLog();
  const [selectedIndex, setSelectedIndex] = useState<number>(null)

  const { requests, handleSelect } = requestsLog;

  const handleOperationSelect = (index: number) => {
    handleSelect(index)
    setSelectedIndex(index)
  }
 
  return (
    <div>
      <Header>Operations</Header>
      <Body>
        {requests.map((req, index) => (
          <Operation
            key={`${req.operation}-${index}`}
            onClick={() => handleOperationSelect(index)}
            selected={selectedIndex === index}
          >
            {index + 1}. {req.operation}
          </Operation>
        ))}
      </Body>
    </div>
  );
};

export default OperationSection;
