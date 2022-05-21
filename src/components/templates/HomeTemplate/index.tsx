import {FC} from "react";
import {Repositories} from "./styles";
import {Repository} from "@components/molechules";
import {useSelector} from "react-redux";
import {selectRepositories} from "@redux/slices/repository";
import {IRepository} from "@interface/repository";

interface Props {
}

const HomeTemplate: FC<Props> = () => {
    const {repositories} = useSelector(selectRepositories)

    return (
        <Repositories>
            {
                repositories && repositories.map((repo: IRepository, index: number) => {
                    return (
                        <Repository repo={repo} key={index.toString()}/>
                    )
                })
            }
        </Repositories>
    )
}

export default HomeTemplate