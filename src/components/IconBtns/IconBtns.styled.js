import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  height: 23px;
  width: auto;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  text-align: center;
  letter-spacing: -0.5px;
  background-color: transparent;
  color: ${p => p.theme.colors.regularText};
  border: none;

  & + & {
    margin-left: 27px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.accentColor};
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  fill: ${p => p.theme.colors.regularText};
`;
