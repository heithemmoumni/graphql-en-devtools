import styled, { createGlobalStyle } from "styled-components";

const colors = {
  D400: "#424242",
  D500: "#212121",
  L500: "#DDF2F2",
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: ${colors.D500};
    color: ${colors.L500}
  }
`;

export const Grid = styled.div`
  display: flex;
  height: 100%;
  & > div {
    overflow-y: scroll;
  }
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
  background: ${colors.D400};
  border-bottom: 1px solid #000;
`;

export const Operation = styled.div`
  padding-left: 4px;
  padding: 2px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background: ${colors.D400} !important;
  }
`;
