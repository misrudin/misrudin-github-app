import {FC, useCallback, useEffect, useState} from "react";
import {InferGetServerSidePropsType} from "next";
import {wrapper} from "@redux/store";
import {ReposTemplate} from "@components/templates";
import {ContentContainer} from "@styles/Containers";
import {clearRepositories, getRepositories, selectRepositories} from "@redux/slices/repository";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, selectUser} from "@redux/slices/user";
import {Seo} from "@components/organisms";

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ghUsername}) => {
    const dispatch = useDispatch()
    const {profile} = useSelector(selectUser)
    const {is_loading, allowToFetch} = useSelector(selectRepositories)
    const [page, setPage] = useState<number>(2)

    useEffect(() => {
        if (ghUsername) {
            // @ts-ignore
            dispatch(clearRepositories())
            // @ts-ignore
            dispatch(getRepositories({username: ghUsername, page: 1}))
            // @ts-ignore
            dispatch(getProfile(ghUsername))
        }
    }, [dispatch, ghUsername])

    useEffect(() => {
        if (allowToFetch) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [page, is_loading, allowToFetch]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 400 < document.documentElement.offsetHeight || is_loading) return;
        if (!allowToFetch) return
        // @ts-ignore
        dispatch(getRepositories({username: ghUsername, page: page})).then(() => {
            setPage(prev => prev + 1)
        })
    }, [page, is_loading, allowToFetch])

    return (
        <>
            <Seo
                title={profile ? `${profile.name}'s Repositories` : `${ghUsername}'s Repositories`}/>
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