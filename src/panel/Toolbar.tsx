import React from "react";
import { ToolbarWrapper } from "./styled";
import { AiFillDelete } from "react-icons/ai";

import { useRequestLog } from "./useRequestLog";

const Toolbar = () => {
  const requestsLog = useRequestLog();

  const { flush } = requestsLog;

  return (
    <ToolbarWrapper>
      <AiFillDelete onClick={() => flush()} />
    </ToolbarWrapper>
  );
};

export default Toolbar;
