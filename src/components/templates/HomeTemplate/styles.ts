import styled from "styled-components";

export const Repositories = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  min-height: calc(100vh - 150px);
  align-items: start;
`