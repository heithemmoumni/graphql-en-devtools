import React, { useEffect } from "react";
import * as Prism from "prismjs";

import { RequestLogProvider, useRequestLog } from "./useRequestLog";
import { GlobalStyles, Grid } from "./styled";
import Toolbar from "./Toolbar";
import OperationSection from "./OperationSection";
import RequestSection from "./RequestSection";
import ResponseSection from "./ResponseSection";
import { flatten } from "../utils/flatten";

const Panel = () => {
  const requestsLog = useRequestLog();

  const { requests, pushRequest, selected } = requestsLog;

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const url = request.request.url;

      if (request.request.method === "POST" && url.includes("graphql")) {
        const postData = JSON.parse(request.request.postData.text);

        const req = flatten(postData);

        request.getContent((body) => {
          pushRequest({
            operation: req.operationName.trim(),
            variables: req.variables,
            query: req.query,
            content: flatten(JSON.parse(body)),
            status: request.response.status,
            time: Number(request.time.toFixed(0)),
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
