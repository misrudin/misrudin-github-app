import styled from "styled-components";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BiBuildings} from "react-icons/bi";
import CountUp from 'react-countup';

export const ProfileContainer = styled.div`
  padding: 14px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.border};
  display: grid;
  grid-template-columns: 350px 1fr;
`

export const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

export const Container = styled.div`
  display: block;
`

export const ProfilePhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
`

export const Typography = styled.p`
  font-family: ${({theme}) => theme.fonts.primary};
  color: ${({theme}) => theme.colors.white};
`

export const ProfileName = styled(Typography)`
  font-weight: 500;
`

export const ProfileBio = styled(Typography)`
  font-size: 13px;
  font-weight: 400;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const IconLocation = styled(FaMapMarkerAlt)`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
`

export const IconBuilding = styled(BiBuildings)`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text};
`


export const Location = styled(Typography)`
  font-family: ${({theme}) => theme.fonts.secondary};
  font-size: 13px;
`

export const RowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.darken};
`

export const RowValue = styled(CountUp)`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.white};
`

export const RowTitle = styled.h1`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`