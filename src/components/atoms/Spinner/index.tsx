import styled, {keyframes} from "styled-components";

const rotating = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const Spin = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, .1);
  border-top: 4px solid ${({theme}) => theme.colors.secondary};
  animation: ${rotating} .5s infinite linear;
`

const Spinner = () => {
    return <Spin/>
}

export default Spinner