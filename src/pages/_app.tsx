import React from "react";
import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/Global";
import {wrapper} from "@redux/store";
import {Footer, Navbar} from "@components/organisms";

interface CustomAppProps extends AppProps {}

const App: React.FC<CustomAppProps> = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App)