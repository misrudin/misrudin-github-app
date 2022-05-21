import {Footer, Navbar, Repositories} from "@components/organisms";
import {PageContainer} from "@styles/Containers";
import {FC} from "react";

interface Props {
}

const HomeTemplate: FC<Props> = () => {
    return (
        <PageContainer>
            <Navbar/>
            <Repositories/>
            <Footer/>
        </PageContainer>
    )
}

export default HomeTemplate