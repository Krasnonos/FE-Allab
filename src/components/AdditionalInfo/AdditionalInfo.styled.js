import styled from 'styled-components';

export const Wrap = styled.div`
  padding-bottom: 63px;

  @media screen and (min-width: 1400px) {
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};

  ::after {
    position: absolute;
    bottom: -8px;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.titleText};
    border-radius: 50%;
  }
`;

export const ListWrap = styled.div`
  overflow: scroll;
  margin-top: 31px;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
`;

export const Item = styled.li`
  & + & {
    margin-left: 9px;
  }
`;

export const BenefitsType = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
`;

export const FirstBtn = styled.button`
  min-width: 122px;
  margin-bottom: 22px;
  padding: 17px 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.457143px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.firstBtnText};
  background-color: ${p => p.theme.colors.firstBtnBg};
  border: 1px solid rgba(85, 105, 158, 0.3);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondBtnText};
    background-color: ${p => p.theme.colors.firstBtnText};
  }

  @media screen and (min-width: 1400px) {
    min-width: 222px;
    height: 49px;
  }
`;

export const SecondBtn = styled.button`
  min-width: 122px;
  padding: 17px 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.457143px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.secondBtnText};
  background-color: ${p => p.theme.colors.secondBtnBg};
  border: 1px solid #ffcf00;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondBtnText};
    color: ${p => p.theme.colors.firstBtnText};
  }

  @media screen and (min-width: 1400px) {
    min-width: 222px;
    height: 49px;
  }
`;
