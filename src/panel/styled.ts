import styled, { createGlobalStyle, css } from "styled-components";

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
    font-size: 14px;
    background: ${colors.D500};
    color: ${colors.L500}
  }
  * {
    transition: all 0.3s ease-out;
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
  pre {
    position: relative;
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
  font-size: 18px;
  padding: 2px;
  padding-left: 4px;
  padding-bottom: 6px;
  background: ${colors.D300};
  border-bottom: 1px solid #000;
`;
export const Body = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 64px);
  padding: 6px;
`;

export const Operation = styled.div<{ selected: boolean }>`
  padding-left: 6px;
  padding: 3px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  font-size: 16px;
  &:hover,
  &:focus {
    background: ${colors.D300} !important;
  }
  ${({ selected }) => css`
    ${selected &&
      css`
        background: ${colors.D300};
      `}
  `}
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

export const CopyButton = styled.span`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  padding: 2px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.3);
  }
`;
