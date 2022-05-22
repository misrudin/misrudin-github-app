import {FC} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {HomeTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {Seo} from "@components/organisms";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {

    return (
        <>
            <Seo title="Home - Find Your Github Repository"/>
            <ContentContainer>
                <HomeTemplate/>
            </ContentContainer>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    return {
        props: {
            ghUsername: ''
        }
    }
})

export default HomePage