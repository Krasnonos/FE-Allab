import svg from 'images/symbol-defs.svg';
import { Map } from 'components';
import {
  Title,
  ContactWrap,
  DescriptionWrap,
  Name,
  FlexWrap,
  Address,
  Links,
} from './Contacts.styled';

export const Contacts = ({ information }) => {
  const { location, email, address, phone, title } = information;
  return (
    <>
      <Title>Contacts</Title>
      <ContactWrap>
        <DescriptionWrap>
          <Name>{title}</Name>
          <FlexWrap>
            <svg width={13} height={18}>
              <use href={`${svg}#icon-locationIcon`}></use>
            </svg>
            <Address>{address}</Address>
          </FlexWrap>
          <Links href={`tel:${phone}`}>{phone}</Links>
          <Links href={`mailto:${email}`}>{email}</Links>
        </DescriptionWrap>
        <Map location={location} />
      </ContactWrap>
    </>
  );
};
