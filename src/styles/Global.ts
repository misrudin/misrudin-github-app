import {createGlobalStyle} from "styled-components";
import {ThemeType} from "@styles/theme";

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: calc(14px + .5vw);
    font-family: 'Roboto', 'Nunito', sans-serif;
    line-height: 1.7;
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.medium};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.dark};
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle