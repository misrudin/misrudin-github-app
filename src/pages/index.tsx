import {FC} from "react";
import {InferGetServerSidePropsType, NextPage} from "next";
import styled from "styled-components";
import {wrapper} from "@redux/store";
import {selectProfile, setProfileData} from "@redux/slices/profile";
import {useSelector} from "react-redux";

const Container = styled.div<{ bg: string }>`
  background-color: ${({bg}) => bg}
`

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({resolvedUrl}) => {
    const {name} = useSelector(selectProfile)

    return (
        <Container bg='red'>
            hahah {resolvedUrl} - {name}
        </Container>
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