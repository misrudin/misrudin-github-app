import React from "react";
import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/Global";

interface CustomAppProps extends AppProps {}

const App: React.FC<CustomAppProps> = ({Component, pageProps})=> {
return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>
)
}