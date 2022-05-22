import styled from "styled-components";
import {FiCode, FiStar} from 'react-icons/fi'
import {GoRepoForked} from "react-icons/go";

export const RepositoryContainer = styled.a`
  padding: 14px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.border};
`

export const RepoName = styled.h5`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 500;
  font-size: 18px;
`

export const RepoHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const RepoType = styled.p`
  color: ${({theme}) => theme.colors.text};
  text-transform: capitalize;
  font-size: 11px;
  border: 1px solid ${({theme}) => theme.colors.border};
  padding: 1px 10px 0 10px;
  display: inline-block;
  border-radius: 20px;
  font-family: ${({theme}) => theme.fonts.secondary};
`

export const RepoDate = styled.p`
  font-family: ${({theme}) => theme.fonts.primary};
  margin-left: auto;
  color: ${({theme}) => theme.colors.text};
  font-size: 12px;
  font-weight: 300;
`

export const RepoDescription = styled.p`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary};
`

export const RepoTopics = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const Topic = styled.p`
  font-family: ${({theme}) => theme.fonts.primary};
  color: ${({theme}) => theme.colors.primary};
  background-color: rgba(66, 165, 245, .1);
  display: inline-block;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
`

export const RepoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const IconBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.darken};
`

export const IconCode = styled(FiCode)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.text};
`

export const IconStar = styled(FiStar)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.text};
`

export const IconFork = styled(GoRepoForked)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.text};
`

export const FooterValue = styled.p`
  font-size: 11px;
  color: ${({theme}) => theme.colors.text};
  font-weight: 300;
`