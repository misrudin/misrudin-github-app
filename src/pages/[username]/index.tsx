import {FC, useEffect} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {ReposTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {getRepositories} from "@redux/slices/repository";
import {useDispatch} from "react-redux";
import {getProfile} from "@redux/slices/user";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ghUsername}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (ghUsername) {
            // @ts-ignore
            dispatch(getRepositories(ghUsername))
            // @ts-ignore
            dispatch(getProfile(ghUsername))
        }
    }, [dispatch, ghUsername])

    return (
        <ContentContainer>
            <ReposTemplate/>
        </ContentContainer>
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