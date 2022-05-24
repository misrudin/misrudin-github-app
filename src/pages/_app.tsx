import React from "react";
import {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/Global";
import {wrapper} from "@redux/store";
import {Footer, Navbar} from "@components/organisms";
import {Spacer} from "@components/atoms";

interface CustomAppProps extends AppProps {
}

const App: React.FC<CustomAppProps> = ({Component, pageProps}) => {
    const {ghUsername} = pageProps
    return (
        <ThemeProvider theme={theme}>
            <Navbar username={ghUsername ?? ''}/>
            <Spacer space={20}/>
            <Component {...pageProps} />
            <Spacer space={20}/>
            <Footer/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App)