import React, { useState } from "react";
import beautify from "json-beautify";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-graphql";

import { copy } from "../utils/copy";
import { CopyButton } from "./styled";

interface CodeProps {
  json: boolean;
  value: string;
}

const Code: React.FC<CodeProps> = ({ json, value }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const content = json ? beautify(value, null, 2, 80) : value;

  const handleCopy = () => {
    copy(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <pre>
        <CopyButton onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </CopyButton>
        <code className={`language-${json ? "json" : "graphql"}`}>
          {content}
        </code>
      </pre>
    </div>
  );
};

export default Code;
