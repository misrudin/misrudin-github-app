import styled from "styled-components";
import {InputStyled} from "@styles/Input";
import {BsSearch} from 'react-icons/bs'
import {device} from "@statics/constant";
import Link from 'next/link'

export const NavbarTitle = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-size: 18px;
`

export const NavbarLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

export const NavbarBrand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  
  @media ${device.xs} {
    ${NavbarTitle} {
      display: none;
    }
  }

  @media ${device.sm} {
    ${NavbarTitle} {
      font-size: 16px;
    }
  }

  @media ${device.md} {
    ${NavbarTitle} {
      font-size: 18px;
    }
  }
`

export const NavbarLogo = styled.img`
  width: 35px;
  height: auto;
  object-fit: contain;
`

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme})=> theme.colors.background};
  border-radius: 30px;
  width: 400px;
  padding: 4px 14px;

  ${InputStyled} {
    border: none;
    background-color: transparent;
    flex: 1;
    width: 100%;
  }

  @media ${device.xs} {
    width: 100%;
    flex: 1;
  }

  @media ${device.sm} {
    width: 100%;
    flex: 1;
  }

  @media ${device.lg} {
    max-width: 400px;
  }
`

export const SearchIcon = styled(BsSearch)`
  color: ${({theme}) => theme.colors.placeholder};
  font-size: 16px;
`

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;

  @media ${device.xs} {
    grid-template-columns: auto 1fr;
  }

  @media ${device.sm} {
    grid-template-columns: auto 1fr;
  }

  @media ${device.lg} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Col = styled.div<{ paceEnd?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({paceEnd}) => paceEnd ? 'flex-end' : 'flex-start'};
`