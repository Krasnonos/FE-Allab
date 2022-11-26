import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  display: block;
  width: 100%;
  height: 206px;
  padding: 13px 16px 27px 16px;
  text-decoration: none;

  @media screen and (min-width: 1400px) {
    height: 164px;
    padding: 24px 16px;
  }
`;

export const Card = styled.li`
  width: 100%;
  background-color: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

  & + & {
    margin-top: 8px;
  }
`;

export const FlexWarp = styled.div`
  display: flex;

  @media screen and (min-width: 1400px) {
    height: 100%;
    width: 100%;
  }
`;

export const ImgWrap = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 45px;
  margin-right: 19px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};

  @media screen and (min-width: 1400px) {
    width: 85px;
    height: 85px;
    margin-right: 26px;
    margin-top: 0px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MainContant = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const RatingAndTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1400px) {
    align-items: center;
  }
`;

export const TimeAndBtnWWrap = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const Btn = styled.button`
  display: none;

  @media screen and (min-width: 1400px) {
    display: block;
    margin-bottom: auto;
    margin-left: auto;
    border: none;
    color: transparent;
  }
`;

export const BookMark = styled.svg`
  background-color: transparent;
`;

export const DiscriptionWrap = styled.div`
  width: 279px;
  margin-top: 14px;

  @media screen and (min-width: 1400px) {
    width: 959px;
    margin-top: 0px;
    margin-right: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (min-width: 1400px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: -0.625px;
  }
`;

export const Svg = styled.svg`
  width: 13px;
  height: 18px;
  fill: #384564;
`;

export const LocationWrap = styled.div`
  display: flex;
`;

export const Location = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.5625px;
  color: ${p => p.theme.colors.regularText};

  @media screen and (min-width: 1400px) {
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0.23619px;
  }
`;
