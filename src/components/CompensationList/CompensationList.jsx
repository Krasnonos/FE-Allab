import { Item, Descr } from './CompensationList.styled';

export const CompensationList = ({ benefits }) => {
  return (
    <ul>
      {benefits.map(item => (
        <Item key={item}>
          <Descr>{item}</Descr>
        </Item>
      ))}
    </ul>
  );
};
