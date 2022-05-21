import {FC} from "react";
import {RepositoriesContainer} from "./styles";
import {Repository} from "@components/molechules";

interface Props {
}

const Repositories: FC<Props> = () => {
    return (
        <RepositoriesContainer>
            <Repository/>
        </RepositoriesContainer>
    )
}

export default Repositories