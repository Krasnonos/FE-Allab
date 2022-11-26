import {
  Wrap,
  Title,
  ListWrap,
  List,
  Item,
  BenefitsType,
  FirstBtn,
  SecondBtn,
} from './AdditionalInfo.styled';

export const AdditionalInfo = ({ type, benefits }) => {
  return (
    <Wrap>
      <Title>Additional info</Title>
      <ListWrap>
        <BenefitsType>Employment type</BenefitsType>
        <List>
          {benefits.map(item => (
            <Item key={item}>
              <FirstBtn type="button">{item}</FirstBtn>
            </Item>
          ))}
        </List>
        <BenefitsType>Benefits</BenefitsType>
        <List>
          {type.map(item => (
            <Item key={item}>
              <SecondBtn type="button">{item}</SecondBtn>
            </Item>
          ))}
        </List>
      </ListWrap>
    </Wrap>
  );
};
