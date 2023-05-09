import { createGlobalStyle, css } from "styled-components";
import { Colors } from "./colors";
import { FontSize } from "./styles";
import TransitionStyles from "./transition-styles";

export const variables = css`
  :root {
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const GlobalStyle = createGlobalStyle`
${variables};

html,body{
    margin: 0;
    padding: 0;
    font-weight: 600;
    scroll-behavior: smooth;

}
*, *::after, *::before{
    box-sizing: border-box;
}
  body {
    margin: 0;
    background-color: ${Colors.white.base};
    font-size: ${FontSize.u4};
    color: ${Colors.blue.secondary};
    font-family: -apple-system, BlinkMacSystemFont, "Poppins", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${TransitionStyles};

`;
