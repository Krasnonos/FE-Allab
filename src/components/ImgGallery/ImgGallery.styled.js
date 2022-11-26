import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 136px;
  padding-bottom: 63px;

  @media screen and (min-width: 1400px) {
    padding-top: 86px;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};

  ::after {
    position: absolute;
    bottom: -8px;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.titleText};
    border-radius: 50%;
  }
`;

export const ListWrap = styled.div`
  overflow: scroll;
  margin-top: 31px;
`;

export const List = styled.ul`
  display: flex;
  width: ${({ length }) => `${length * 220}px`};
  overflow: scroll;
`;

export const Item = styled.li`
  width: 209px;
  height: 115px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    margin-left: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
