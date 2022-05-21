import styled from "styled-components";

export const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${({theme}) => theme.colors.light};
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.secondary};
`