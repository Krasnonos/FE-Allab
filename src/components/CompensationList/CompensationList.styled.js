import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 100%;
  margin-left: 35px;

  ::before {
    position: absolute;
    top: 5px;
    left: -35px;
    display: block;
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${p => p.theme.colors.regularText};
  }
`;

export const Descr = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: ${p => p.theme.colors.regularText};
`;
