import { createGlobalStyle } from "styled-components";
import PixelFont from "./assets/fonts/VT323-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "PixelFont";
    font-style: normal;
    font-weight: 400;
    src:
      url('${PixelFont}')
  }`;
