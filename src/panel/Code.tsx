import React from "react";
import beautify from "json-beautify";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-graphql";

interface CodeProps {
  json: boolean;
  value: string;
}

const Code: React.FC<CodeProps> = ({ json, value }) => {
  return (
    <div>
      <pre>
        <code className={`language-${json ? "json" : "graphql"}`}>
          {json ? beautify(value, null, 2, 80) : value}
        </code>
      </pre>
    </div>
  );
};

export default Code;
