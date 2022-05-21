import styled from "styled-components";
import {InputStyled} from "@styles/Input";
import {BsGithub} from 'react-icons/bs'

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const NavbarTitle = styled.h1`
  color: ${({theme}) => theme.colors.dark};
  font-size: 18px;
`

export const NavbarLogo = styled.img`
  width: 35px;
  height: auto;
  object-fit: contain;
`

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, .04);
  border-radius: 30px;
  width: 400px;
  padding: 4px 14px;

  ${InputStyled} {
    border: none;
    background-color: transparent;
    flex: 1;
    width: 100%;
  }
`

export const SearchIcon = styled(BsGithub)`
  color: ${({theme}) => theme.colors.medium};
`

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`

export const Col = styled.div<{ paceEnd?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({paceEnd}) => paceEnd ? 'flex-end' : 'flex-start'};
`