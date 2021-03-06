import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -30px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`

export const Home = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 230px);
`

export const MainContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerGithubLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const GithubLogo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  animation: ${fadeIn} 2s;
`

export const HomeTitle = styled.h2`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.secondary};
  animation: ${fadeIn} 1s;
  text-align: center;
`

export const HomeText = styled.p`
  color: ${({theme}) => theme.colors.text};
  font-size: 15px;
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.secondary};
  animation: ${fadeIn} 1s;
  text-align: center;
`