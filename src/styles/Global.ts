import {createGlobalStyle} from "styled-components";
import {ThemeType} from "@styles/theme";

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props> `
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600&display=swap');
  
    *, *:after, *:before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-size: calc(14px + .5vw);
      font-family: ;
    }
`

export default GlobalStyle