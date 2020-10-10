import React from "react";
import { GraphqlCodeBlock } from "graphql-syntax-highlighter-react";

import { RequestLogProvider, useRequestLog } from "./useRequestLog";
import { GlobalStyles, Grid, Header, Operation } from "./styled";

const Panel = () => {
  const requestsLog = useRequestLog();

  const { requests, pushRequest, handleSelect, selected } = requestsLog;

  React.useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const url = request.request.url;

      if (request.request.method === "POST" && url.includes("graphql")) {
        const req = JSON.parse(request.request.postData.text)[0];

        request.getContent((body) => {
          pushRequest({
            operation: req.operationName,
            variables: JSON.stringify(req.variables),
            query: req.query,
            content: JSON.stringify(JSON.parse(body)[0]),
          });
        });
      }
    });
  }, []);

  if (requests.length === 0) {
    return <div>No Requests</div>;
  }

  return (
    <Grid>
      <div>
        <Header>Operations</Header>
        {requests.map((req, index) => (
          <Operation key={req.operation} onClick={() => handleSelect(index)}>
            {index + 1}. {req.operation}
          </Operation>
        ))}
      </div>
      <div>
        <Header>Request</Header>
        {selected && (
          <div>
            <h3>Variables</h3>
            <div>{selected.variables}</div>
            <h3>Query</h3>
            <GraphqlCodeBlock
              className="GraphqlCodeBlock"
              queryBody={selected.query}
            />
          </div>
        )}
      </div>
      <div>
        <Header>Response</Header>
      </div>
    </Grid>
  );
};

export default () => (
  <RequestLogProvider>
    <GlobalStyles />
    <Panel />
  </RequestLogProvider>
);
