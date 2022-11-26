import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: auto;

  @media screen and (min-width: 1400px) {
    position: absolute;
    right: 0;
    top: 0;
    flex-direction: column-reverse;
  }
`;

export const PriceText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: ${p => p.theme.colors.regularText};
`;

export const Price = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.625px;
  text-align: end;
  color: ${p => p.theme.colors.titleText}; ;
`;
