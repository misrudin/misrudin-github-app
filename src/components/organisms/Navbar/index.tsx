import {FC, useEffect} from "react";
import {ContentContainer, NavbarContainer} from "@styles/Containers";
import {Col, NavbarBrand, NavbarLink, NavbarLogo, NavbarSearch, NavbarTitle, Row, SearchIcon} from "./styles";
import {siteLogo} from "@statics/icons";
import {InputStyled} from "@styles/Input";
import {useRouter} from "next/router";
import {useDebounce} from "@hooks/useDebounce";

interface NavbarProps {
    username?: string
}

const Navbar: FC<NavbarProps> = ({username}) => {
    const router = useRouter()
    const [debounceValue, search, setSearch] = useDebounce<string>(username ?? '', 1000)

    function searchRepos(value: string) {
        router.push(`/${value}`).then()
    }

    useEffect(() => {
        searchRepos(debounceValue)
    }, [debounceValue])

    useEffect(() => {
        if (username === '') {
            setSearch('')
        }
    }, [username])

    return (
        <NavbarContainer>
            <ContentContainer>
                <Row>
                    <Col>
                        <NavbarLink href="/">
                            <NavbarBrand>
                                <NavbarLogo src={siteLogo} alt={process.env.NEXT_PUBLIC_SITE_NAME}/>
                                <NavbarTitle>{process.env.NEXT_PUBLIC_SITE_NAME}</NavbarTitle>
                            </NavbarBrand>
                        </NavbarLink>
                    </Col>
                    <Col paceEnd>
                        <NavbarSearch>
                            <SearchIcon/>
                            <InputStyled value={search}
                                         onChange={(e) => setSearch(e.target.value)}
                                         onKeyPress={(e) => {
                                             if (e.key === "Enter") {
                                                 const target = e.target as HTMLInputElement
                                                 searchRepos(target.value)
                                             }
                                         }}
                                         placeholder="Masukan username github"/>
                        </NavbarSearch>
                    </Col>
                </Row>
            </ContentContainer>
        </NavbarContainer>
    )
}

export default Navbar