import React, { useEffect } from "react";
import beautify from "json-beautify";
import * as Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-graphql";

import { RequestLogProvider, useRequestLog } from "./useRequestLog";
import { GlobalStyles, Grid, Header, Operation } from "./styled";

const Panel = () => {
  const requestsLog = useRequestLog();

  const { requests, pushRequest, handleSelect, selected } = requestsLog;

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const url = request.request.url;

      if (request.request.method === "POST" && url.includes("graphql")) {
        const req = JSON.parse(request.request.postData.text)[0];

        request.getContent((body) => {
          pushRequest({
            operation: req.operationName,
            variables: req.variables,
            query: req.query,
            content: JSON.parse(body)[0],
          });
        });
      }
    });
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [selected]);

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
            <pre>
              <code className="language-json no-whitespace-normalization">
                {beautify(selected.variables, null, 2, 80)}
              </code>
            </pre>
            <h3>Query</h3>
            <pre>
              <code className="language-graphql no-whitespace-normalization">
                {selected.query}
              </code>
            </pre>
          </div>
        )}
      </div>
      <div>
        <Header>Response</Header>
        {selected && (
          <div>
            <h3>Body</h3>
            <pre>
              <code className="language-json no-whitespace-normalization">
                {beautify(selected.content, null, 2, 80)}
              </code>
            </pre>
          </div>
        )}
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
