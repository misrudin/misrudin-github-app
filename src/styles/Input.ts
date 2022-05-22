import styled from "styled-components";
import {device} from "@statics/constant";

export const InputStyled = styled.input`
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.light};
  outline: none;
  padding: 10px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary};
  font-weight: 400;

  &:focus {
    border-color: ${({theme}) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.placeholder};
    font-weight: 400;
  }

  @media ${device.xs} {
    font-size: 16px;
  }
`