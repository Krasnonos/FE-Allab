import { RatingStars, DateOfPost, BenefitsList } from 'components';
import svg from '../../images/symbol-defs.svg';
import {
  NavLink,
  Card,
  FlexWarp,
  ImgWrap,
  Img,
  MainContant,
  RatingAndTimeWrap,
  TimeAndBtnWWrap,
  Btn,
  BookMark,
  DiscriptionWrap,
  Title,
  Svg,
  LocationWrap,
  Location,
} from './JobListItem.styled';

export const JobListItem = ({ info }) => {
  const { pictures, title, updatedAt, benefits, address, id } = info;

  return (
    <Card>
      <NavLink to={id}>
        <FlexWarp>
          <ImgWrap>
            <Img src={pictures[0]} alt="" />
          </ImgWrap>
          <MainContant>
            <RatingAndTimeWrap>
              <RatingStars />
              <TimeAndBtnWWrap>
                <DateOfPost createdTime={updatedAt} />
                <Btn type="button">
                  <BookMark width={32} height={32}>
                    <use href={`${svg}#icon-bookmarkIcon`}></use>
                  </BookMark>
                </Btn>
              </TimeAndBtnWWrap>
            </RatingAndTimeWrap>
            <DiscriptionWrap>
              <Title>{title}</Title>
              <BenefitsList benefits={benefits} />
              <LocationWrap>
                <Svg>
                  <use href={`${svg}#icon-locationIcon`}></use>
                </Svg>
                <Location>{address}</Location>
              </LocationWrap>
            </DiscriptionWrap>
          </MainContant>
        </FlexWarp>
      </NavLink>
    </Card>
  );
};
