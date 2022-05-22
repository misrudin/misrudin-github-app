import styled from "styled-components";
import {device} from "@statics/constant";

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  row-gap: 30px;
  min-height: calc(100vh - 230px);
  align-items: start;

  @media ${device.xs} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }

  @media ${device.sm} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 230px);
  height: 100%;
`

export const ErrorIcon = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const ErrorText = styled.p`
  font-family: ${({theme}) => theme.fonts.secondary};
  color: ${({theme}) => theme.colors.white};
  text-align: center;
  font-size: 15px;
`

export const ErrorDescription = styled(ErrorText)`
  color: ${({theme}) => theme.colors.text};
  font-size: 13px;
  font-weight: 300;
`

export const ReposTitle = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.secondary};
  font-size: 16px;
  font-weight: 500;
`