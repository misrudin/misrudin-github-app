import {FC, useEffect} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {HomeTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {getRepositories} from "@redux/slices/repository";
import {useDispatch} from "react-redux";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({resolvedUrl}) => {
    const dispatch = useDispatch()

    useEffect(()=> {
        // @ts-ignore
        dispatch(getRepositories())
    },[])

    return (
        <ContentContainer>
            <HomeTemplate/>
        </ContentContainer>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({resolvedUrl}) => {
    return {
        props: {
            resolvedUrl: resolvedUrl
        }
    }
})

export default HomePage