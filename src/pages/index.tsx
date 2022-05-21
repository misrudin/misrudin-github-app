import {FC} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {selectProfile, setProfileData} from "@redux/slices/profile";
import {useSelector} from "react-redux";
import {HomeTemplate} from "@components/templates";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({resolvedUrl}) => {
    const {name} = useSelector(selectProfile)

    return (
        <HomeTemplate/>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({resolvedUrl}) => {

    store.dispatch(setProfileData("Misrudin in server"))

    return {
        props: {
            resolvedUrl: resolvedUrl
        }
    }
})

export default HomePage