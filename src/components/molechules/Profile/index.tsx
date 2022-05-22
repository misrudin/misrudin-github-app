import {
    Col,
    Container,
    LocationContainer,
    ProfileBio,
    ProfileContainer,
    ProfileName,
    ProfilePhoto,
    IconLocation,
    Location, IconBuilding, Row, RowItem, RowTitle, RowValue
} from "./styles";
import {IUser} from "@interface/user";
import {FC} from "react";
import {Spacer} from "@components/atoms";

interface Props {
    profile: IUser
}

const Profile: FC<Props> = ({profile}) => {
    return (
        <ProfileContainer>
            <Col>
                <ProfilePhoto src={profile.avatar_url} alt={profile.name}/>
                <Container>
                    <ProfileName>{profile.name}</ProfileName>
                    <ProfileBio>{profile.bio ?? '-'}</ProfileBio>
                    <Spacer space={5}/>
                    <LocationContainer>
                        <IconLocation/>
                        <Location>{profile.location ?? '-'}</Location>
                    </LocationContainer>
                    <LocationContainer>
                        <IconBuilding/>
                        <Location>{profile.company ?? '-'}</Location>
                    </LocationContainer>
                </Container>
            </Col>
            <Row>
                <RowItem>
                    <RowValue end={profile.public_repos} />
                    <RowTitle>Public Repository</RowTitle>
                </RowItem>
                <RowItem>
                    <RowValue end={profile.followers} />
                    <RowTitle>Followers</RowTitle>
                </RowItem>
                <RowItem>
                    <RowValue end={profile.following} />
                    <RowTitle>Following</RowTitle>
                </RowItem>
            </Row>
        </ProfileContainer>
    )
}

export default Profile