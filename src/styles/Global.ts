import {createGlobalStyle} from "styled-components";
import {ThemeType} from "@styles/theme";

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>``

export default GlobalStyle