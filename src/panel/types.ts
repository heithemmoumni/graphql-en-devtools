import React from "react";

export interface RequestLogContextProps {
  requests: Array<Request>;
  pushRequest: (req: Request) => void;
  selected: Request | null;
  handleSelect: (index: number) => void;
  flush: () => void;
}

export interface Request {
  operation: string;
  variables: any;
  query: string;
  content: any;
}
