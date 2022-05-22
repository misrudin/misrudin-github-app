import {FC} from "react";
import {
    ContainerGithubLogo,
    GithubLogo,
    Home,
    HomeText,
    MainContainerHome,
    HomeTitle
} from "@components/templates/HomeTemplate/styles";
import {githubLogo} from "@statics/icons";
import {Spacer} from "@components/atoms";

interface Props {
}

const HomeTemplate: FC<Props> = () => {

    return (
        <Home>
            <MainContainerHome>
                <ContainerGithubLogo>
                    <GithubLogo src={githubLogo} alt="Github"/>
                </ContainerGithubLogo>
                <Spacer space={40}/>
                <HomeTitle>Selamat datang 🥳</HomeTitle>
                <Spacer space={10}/>
                <HomeText>Silahkan masukan username github anda pada kolom pencarian di atas</HomeText>
            </MainContainerHome>
        </Home>
    )
}

export default HomeTemplate