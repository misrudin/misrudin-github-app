import {FC} from "react";
import {
    RepoHead,
    RepoName,
    RepositoryContainer,
    RepoType,
    RepoDescription,
    RepoDate,
    RepoTopics,
    Topic,
    RepoFooter,
    FooterItem,
    IconCode,
    FooterValue,
    IconStar,
    IconFork, IconBg
} from "./styles";
import {IRepository} from "@interface/repository";
import {Spacer} from "@components/atoms";
import {dateFormat} from "@utils/dateFormat";

interface Props {
    repo: IRepository
}

const Repository: FC<Props> = ({repo}) => {
    return (
        <RepositoryContainer href={repo.clone_url} target="_blank" rel="noreferrer">
            <RepoHead>
                <RepoName>{repo.name}</RepoName>
                <RepoType>{repo.visibility}</RepoType>
                <RepoDate>{dateFormat(repo.created_at)}</RepoDate>
            </RepoHead>
            <Spacer space={10}/>
            <RepoDescription>{repo.description ?? '-'}</RepoDescription>
            {
                repo.topics.length !== 0 && <Spacer space={8}/>
            }
            {
                repo.topics.length !== 0 &&
                <RepoTopics>
                    {
                        repo.topics.map((topic, index) => {
                            return <Topic key={index}>{topic}</Topic>
                        })
                    }
                </RepoTopics>
            }
            <Spacer space={20}/>
            <RepoFooter>
                <FooterItem>
                    <IconBg>
                        <IconCode/>
                    </IconBg>
                    <FooterValue>{repo.language ?? '-'}</FooterValue>
                </FooterItem>
                <FooterItem>
                    <IconStar/>
                    <FooterValue>{repo.stargazers_count ?? '-'}</FooterValue>
                </FooterItem>
                <FooterItem>
                    <IconFork/>
                    <FooterValue>{repo.forks_count ?? '-'}</FooterValue>
                </FooterItem>
                <FooterItem>
                    <FooterValue>Updated on {dateFormat(repo.updated_at)}</FooterValue>
                </FooterItem>
            </RepoFooter>
        </RepositoryContainer>
    )
}
export default Repository