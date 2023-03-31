import { css } from "styled-components";

export const xs = (props) => {
  return css`
    @media only screen and (max-width:350px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width:480px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width:780px) {
      ${props}
    }
  `;
};
export const xl = (props) => {
  return css`
    @media only screen and (max-width:1440px) {
      ${props}
    }
  `;
};
export const lg = (props) => {
  return css`
    @media only screen and (max-width:1366px) {
      ${props}
    }
  `;
};
export const xxl = (props) => {
  return css`
    @media only screen and (max-width:2000px) {
      ${props}
    }
  `;
};