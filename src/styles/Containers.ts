import styled from "styled-components";

export const PageContainer = styled.main`
  background-color: white;
  min-height: 100vh;
`

export const NavbarContainer = styled.nav`
  padding: 0 40px;
  background-color: white;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
`

export const ContentContainer = styled.div`
  padding: 10px 40px;
  background-color: blue;
`

export const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: ${({theme}) => theme.colors.white};
  border-top: 1px solid rgba(0, 0, 0, .04);
  display: flex;
  align-items: center;
  justify-content: center;
`