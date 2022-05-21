import {FC} from "react";

const Spacer: FC<{ space: number }> = ({space}) => {
    return (
        <div style={{width: space, height: space}}/>
    )
}

export default Spacer