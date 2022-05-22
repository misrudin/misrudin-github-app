import {FC, useEffect} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {ReposTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {getRepositories} from "@redux/slices/repository";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, selectUser} from "@redux/slices/user";
import {Seo} from "@components/organisms";
import {capitalizeFirstLetter} from "@utils/string";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ghUsername}) => {
    const dispatch = useDispatch()
    const {profile} = useSelector(selectUser)

    useEffect(() => {
        if (ghUsername) {
            // @ts-ignore
            dispatch(getRepositories(ghUsername))
            // @ts-ignore
            dispatch(getProfile(ghUsername))
        }
    }, [dispatch, ghUsername])

    return (
        <>
            <Seo
                title={profile ? `${capitalizeFirstLetter(profile.name)}'s Repositories` : `${capitalizeFirstLetter(ghUsername)}'s Repositories`}/>
            <ContentContainer>
                <ReposTemplate/>
            </ContentContainer>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
    const username = query?.username as string
    return {
        props: {
            ghUsername: username ?? ''
        }
    }
})

export default HomePage