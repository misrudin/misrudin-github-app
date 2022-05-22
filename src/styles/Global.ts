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
    font-size: 14px;
    font-family: 'Roboto', 'Nunito', sans-serif;
    line-height: 1.7;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.medium};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle