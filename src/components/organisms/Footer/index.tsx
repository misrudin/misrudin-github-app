import {ContentContainer, FooterContainer} from "@styles/Containers";
import {FC} from "react";
import {FooterText} from "./styles";

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
    return (
        <FooterContainer>
            <ContentContainer>
                <FooterText>Created by Misrudin • For Complete Assessment Test Submission MyTEnS</FooterText>
            </ContentContainer>
        </FooterContainer>
    )
}

export default Footer