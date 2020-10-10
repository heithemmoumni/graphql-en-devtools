import React from "react";
import Code from "./Code";

import { useRequestLog } from "./useRequestLog";
import { Header, Body } from "./styled";

const RequestSection = () => {
  const requestsLog = useRequestLog();

  const { selected } = requestsLog;
  return (
    <div>
      <Header>Request</Header>
      <Body>
        {selected && (
          <div>
            <h3>Variables</h3>
            <Code json={true} value={selected.variables} />
            <h3>Query</h3>
            <Code json={false} value={selected.query} />
          </div>
        )}
      </Body>
    </div>
  );
};

export default RequestSection;
