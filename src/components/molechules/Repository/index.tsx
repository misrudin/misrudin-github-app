import {FC} from "react";
import {RepositoryContainer} from "./styles";
import {IRepository} from "@interface/repository";

interface Props {
    repo: IRepository
}

const Repository: FC<Props> = ({repo}) => {
    return (
        <RepositoryContainer>

        </RepositoryContainer>
    )
}
export default Repository