import {FC} from "react";
import styled from "styled-components";
import {Spinner} from "@components/atoms";

const Backdrop = styled.div<{ useBackdrop?: boolean }>`
  background-color: ${({useBackdrop}) => useBackdrop ? 'rgba(0, 0, 0, .04)' : 'transparent'};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading: FC<{ useBackdrop?: boolean }> = ({useBackdrop}) => {
    return (
        <Backdrop useBackdrop={useBackdrop}>
            <Spinner/>
        </Backdrop>
    )
}

Loading.defaultProps = {
    useBackdrop: true
}

export default Loading