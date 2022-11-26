import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 9px;
  background-color: ${p => p.theme.colors.pageBg};
`;

export const List = styled.ul`
  width: 396px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;
