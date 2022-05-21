import {FC} from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({}) => {
    return (
        <div></div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return {
        props: {},
    }
}

export default HomePage