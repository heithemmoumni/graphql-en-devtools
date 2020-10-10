import React, { useEffect } from "react";
import * as Prism from "prismjs";

import { RequestLogProvider, useRequestLog } from "./useRequestLog";
import { GlobalStyles, Grid } from "./styled";
import Toolbar from "./Toolbar";
import OperationSection from "./OperationSection";
import RequestSection from "./RequestSection";
import ResponseSection from "./ResponseSection";

const Panel = () => {
  const requestsLog = useRequestLog();

  const { requests, pushRequest, selected } = requestsLog;

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

  return (
    <>
      <Toolbar />
      {requests.length !== 0 && (
        <Grid>
          <OperationSection />
          <RequestSection />
          <ResponseSection />
        </Grid>
      )}
    </>
  );
};

export default () => (
  <RequestLogProvider>
    <GlobalStyles />
    <Panel />
  </RequestLogProvider>
);
