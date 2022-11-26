import styled from 'styled-components';

export const Wrap = styled.div`
  @media screen and (min-width: 1400px) {
    margin-right: 32px;
  }
`;

export const Svg = styled.svg`
  width: 10px;
  height: 10px;
  fill: #384564;

  & + & {
    margin-left: 1px;
  }

  @media screen and (min-width: 1400px) {
    width: 19px;
    height: 18px;
  }
`;
