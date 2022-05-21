import { FooterContainer } from "@styles/Containers";
import {FC} from "react";
import {FooterText} from "./styles";

interface FooterProps {}

const Footer: FC<FooterProps> =()=> {
    return (
        <FooterContainer>
            <FooterText>Created by Misrudin • for</FooterText>
        </FooterContainer>
    )
}

export default Footer