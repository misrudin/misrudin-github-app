import {FC} from "react";
import {ContentContainer, NavbarContainer} from "@styles/Containers";
import {Col, NavbarBrand, NavbarLogo, NavbarSearch, NavbarTitle, Row, SearchIcon} from "./styles";
import {siteLogo} from "@statics/icons";
import {InputStyled} from "@styles/Input";

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {
    return (
        <NavbarContainer>
            <ContentContainer>
                <Row>
                    <Col>
                        <NavbarBrand>
                            <NavbarLogo src={siteLogo}/>
                            <NavbarTitle>Github Repository</NavbarTitle>
                        </NavbarBrand>
                    </Col>
                    <Col paceEnd>
                        <NavbarSearch>
                            <SearchIcon/>
                            <InputStyled placeholder="Masukan username github"/>
                        </NavbarSearch>
                    </Col>
                </Row>
            </ContentContainer>
        </NavbarContainer>
    )
}

export default Navbar