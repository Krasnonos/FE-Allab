import { Wrap, Title, ListWrap, List, Item, Img } from './ImgGallery.styled';

export const ImgGallery = ({ pictures }) => {
  return (
    <Wrap>
      <Title>Attached images</Title>
      <ListWrap>
        <List length={pictures.length}>
          {pictures.map((imgUrl, id) => (
            <Item key={id}>
              <Img src={imgUrl} alt="Attached images" />
            </Item>
          ))}
        </List>
      </ListWrap>
    </Wrap>
  );
};
