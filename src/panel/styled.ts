import styled, { createGlobalStyle } from "styled-components";

const colors = {
  D200: "#505050",
  D300: "#424242",
  D400: "#303030",
  D500: "#212121",
  L500: "#DDF2F2"
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: ${colors.D500};
    color: ${colors.L500}
  }
  * ::-webkit-scrollbar {
    width: 12px;
    background: rgba(0, 0, 0, 0.9);
  }
  * ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
  }
  * ::-webkit-scrollbar-thumb {
    background: ${colors.D400};
  }
`;

export const Grid = styled.div`
  display: flex;
  height: calc(100vh - 32px);
  & > div:nth-child(1) {
    width: 20%;
  }
  & > div:nth-child(2),
  & > div:nth-child(3) {
    width: 40%;
    border-left: 1px solid #333333;
  }
`;

export const Header = styled.div`
  font-size: 20px;
  padding: 2px;
  padding-left: 4px;
  padding-bottom: 6px;
  background: ${colors.D300};
  border-bottom: 1px solid #000;
`;
export const Body = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 64px);
`;

export const Operation = styled.div`
  padding-left: 6px;
  padding: 3px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  font-size: 18px;
  &:hover,
  &:focus,
  &:active {
    background: ${colors.D300} !important;
  }
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  height: 32px;
  line-height: 32px;
  background: ${colors.D200};
  border-bottom: 1px solid #000;
  width: 100%;
  > * {
    cursor: pointer;
    padding: 8px;
  }
`;
