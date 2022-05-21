import {FC, useEffect} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {HomeTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {getRepositories} from "@redux/slices/repository";
import {useDispatch} from "react-redux";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ghUsername}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if(ghUsername) {
            // @ts-ignore
            dispatch(getRepositories(ghUsername))
        }
    }, [dispatch, ghUsername])

    return (
        <ContentContainer>
            <HomeTemplate/>
        </ContentContainer>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
    return {
        props: {
            ghUsername: query?.username ?? null
        }
    }
})

export default HomePage