import { Flex, PriceText, Price } from './Salery.styled';

export const Salery = ({ salary }) => {
  return (
    <Flex>
      <PriceText>Brutto, per year</PriceText>
      <Price>
        <span>&#8364;</span>
        {salary}
      </Price>
    </Flex>
  );
};
