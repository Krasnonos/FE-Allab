import { useParams } from 'react-router-dom';
import { useGetJobsList } from 'hooks';
import {
  IconBtns,
  DateOfPost,
  Salery,
  CompensationList,
  ImgGallery,
  AdditionalInfo,
  Contacts,
} from 'components';
import {
  MainWrap,
  InfoWrap,
  Flex,
  Title,
  RelativeWrap,
  AfterTitle,
  FirstApplyBtn,
  FlexWrap,
  Descr,
  SectionTitle,
  Compensation,
  ReverseWrap,
  ApplyBtn,
  BackLink,
  Svg,
} from './JobDetails.styled';
import svg from 'images/symbol-defs.svg';

export const JobDetails = () => {
  const { jobId } = useParams();
  const { isLoading, data } = useGetJobsList();

  if (!data) {
    return;
  }

  const {
    title,
    createdAt,
    salary,
    description,
    benefits,
    pictures,
    employment_type,
    location,
    email,
    address,
    phone,
  } = data.data.find(({ id }) => id === jobId);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <MainWrap>
      <InfoWrap>
        <Flex>
          <Title>Job Details</Title>
          <IconBtns />
        </Flex>
        <FirstApplyBtn type="button">Apply now</FirstApplyBtn>
        <RelativeWrap>
          <AfterTitle>{title}</AfterTitle>
          <FlexWrap>
            <DateOfPost createdTime={createdAt} />
            <Salery salary={salary} />
          </FlexWrap>
        </RelativeWrap>

        <Descr>{description}</Descr>
        <SectionTitle>Responsopilities</SectionTitle>
        <Descr>{description}</Descr>
        <Compensation>Compensation & Benefits:</Compensation>
        <CompensationList benefits={benefits} />
        <ApplyBtn type="button">Apply now</ApplyBtn>
        <ReverseWrap>
          <ImgGallery pictures={pictures} />
          <AdditionalInfo type={employment_type} benefits={benefits} />
        </ReverseWrap>
        <BackLink to="/jobs">
          <Svg>
            <use href={`${svg}#icon-Arrow`}></use>
          </Svg>
          RETURN TO JOB BOARD
        </BackLink>
      </InfoWrap>
      <Contacts information={{ location, email, address, phone, title }} />
    </MainWrap>
  );
};
