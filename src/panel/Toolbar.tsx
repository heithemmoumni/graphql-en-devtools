import React from "react";
import { ToolbarWrapper } from "./styled";
import { FcDeleteDatabase } from "react-icons/fc";

import { useRequestLog } from "./useRequestLog";

const Toolbar = () => {
  const requestsLog = useRequestLog();

  const { flush } = requestsLog;

  return (
    <ToolbarWrapper>
      <FcDeleteDatabase onClick={() => flush()} />
    </ToolbarWrapper>
  );
};

export default Toolbar;
