import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrap = styled.div`
  width: 414px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 15px;
  background-color: ${p => p.theme.colors.mainBg};

  @media screen and (min-width: 1400px) {
    display: flex;
    width: 1400px;
  }
`;

export const InfoWrap = styled.div`
  @media screen and (min-width: 1400px) {
    width: 721px;
    margin-right: 135px;
  }
`;

export const Flex = styled.div`
  position: relative;

  ::after {
    position: absolute;
    bottom: 50px;
    left: 0px;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.titleText};
    border-radius: 50%;

    @media screen and (min-width: 1400px) {
      bottom: -5px;
    }
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 49px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 37px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (min-width: 1400px) {
    margin-bottom: 0px;
  }
`;

export const RelativeWrap = styled.div`
  @media screen and (min-width: 1400px) {
    position: relative;
    margin-top: 32px;
  }
`;

export const AfterTitle = styled.h2`
  margin-top: 23px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.75px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (min-width: 1400px) {
    width: 501px;
    margin-top: 0px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  max-height: 54px;
  margin-top: 5px;
  margin-bottom: 14px;

  @media screen and (min-width: 1400px) {
    margin-top: 7px;
    margin-bottom: 7px;
  }
`;

export const Descr = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: ${p => p.theme.colors.regularText};
`;

export const SectionTitle = styled.h2`
  margin-top: 43px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (min-width: 1400px) {
    margin-bottom: 18px;
  }
`;

export const Compensation = styled.h2`
  margin-top: 27px;
  margin-bottom: 35px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};
`;

export const ApplyBtn = styled.button`
  display: block;
  padding: 18px 30px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainBg};
  background-color: #384564;
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondBtnText};
  }

  @media screen and (min-width: 1400px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 86px;
  }
`;

export const FirstApplyBtn = styled.button`
  display: none;

  @media screen and (min-width: 1400px) {
    display: block;
    padding: 18px 30px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    text-align: center;
    text-transform: uppercase;
    color: ${p => p.theme.colors.mainBg};
    background-color: #384564;
    border: none;
    border-radius: ${p => p.theme.radii.normal};

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.secondBtnText};
    }
  }
`;

export const ReverseWrap = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const BackLink = styled(Link)`
  display: none;
  @media screen and (min-width: 1400px) {
    display: flex;
    padding-right: 23px;
    padding-left: 23px;
    align-items: center;
    width: 213px;
    height: 50px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    text-transform: uppercase;
    text-decoration: none;
    color: ${p => p.theme.colors.titleText};
    background-color: ${p => p.theme.colors.firstBtnBg};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.none};

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.secondBtnText};
      background-color: ${p => p.theme.colors.firstBtnText};
    }
  }
`;

export const Svg = styled.svg`
  width: 10px;
  height: 18px;
  margin-right: 19px;
`;
