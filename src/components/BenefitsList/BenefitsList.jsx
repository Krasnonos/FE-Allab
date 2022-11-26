import { List, Item, Text } from './BenefitsList.styled';

export const BenefitsList = ({ benefits }) => {
  return (
    <List>
      {benefits.map(item => (
        <Item key={item}>
          <Text>{item}</Text>
        </Item>
      ))}
    </List>
  );
};
