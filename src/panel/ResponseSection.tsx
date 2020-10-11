import React from "react";
import { FcAnswers, FcOvertime } from "react-icons/fc";

import Code from "./Code";
import { useRequestLog } from "./useRequestLog";
import { Header, Body } from "./styled";

const ResponseSection = () => {
  const requestsLog = useRequestLog();

  const { selected } = requestsLog;
  return (
    <div>
      <Header>Response</Header>
      <Body>
        {selected && (
          <>
            <div>
              <span>
                <FcAnswers /> {selected.status} <FcOvertime /> {selected.time}ms
              </span>
            </div>
            <div>
              <h3>Body</h3>
              <Code json={true} value={selected.content} />
            </div>
          </>
        )}
      </Body>
    </div>
  );
};

export default ResponseSection;
