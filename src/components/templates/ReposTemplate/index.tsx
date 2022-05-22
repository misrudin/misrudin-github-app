import {FC} from "react";
import {ErrorContainer, ErrorDescription, ErrorIcon, ErrorText, Repositories, ReposTitle} from "./styles";
import {Loading, Profile, Repository} from "@components/molechules";
import {useSelector} from "react-redux";
import {selectRepositories} from "@redux/slices/repository";
import {IRepository} from "@interface/repository";
import {errorIcon} from "@statics/icons";
import {Spacer} from "@components/atoms";
import {selectUser} from "@redux/slices/user";

interface Props {
}

const ReposTemplate: FC<Props> = () => {
    const {repositories, is_loading, is_error, msg} = useSelector(selectRepositories)
    const {profile} = useSelector(selectUser)

    return !is_error ? (
        <>
            {profile && <Profile profile={profile}/>}
            {profile && <Spacer space={20}/>}

            {profile ? <ReposTitle>{profile.name}'s Repositories</ReposTitle> :
                repositories ?
                <ReposTitle>Repositories</ReposTitle> : null}

            <Spacer space={10}/>
            <Repositories>
                {
                    repositories && repositories?.map((repo: IRepository, index: number) => {
                        return (
                            <Repository repo={repo} key={index.toString()}/>
                        )
                    })
                }
                {is_loading && <Loading/>}
            </Repositories>
        </>
    ) : (
        <ErrorContainer>
            <ErrorIcon src={errorIcon} alt={msg}/>
            <Spacer space={20}/>
            <ErrorText>{msg}</ErrorText>
            <Spacer space={10}/>
            <ErrorDescription>Silahkan masukan username github anda pada kolom pencarian di atas.</ErrorDescription>
        </ErrorContainer>
    )
}

export default ReposTemplate