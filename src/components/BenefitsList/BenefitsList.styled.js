import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-top: 5px;
  margin-bottom: 7px;

  @media screen and (min-width: 1400px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const Item = styled.li`
  position: relative;
  & + & {
    margin-left: 15px;

    ::before {
      position: absolute;
      top: 6px;
      left: -9px;
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background-color: ${p => p.theme.colors.regularText};
      border-radius: 50%;
    }

    @media screen and (min-width: 1400px) {
      margin-left: 20px;
      ::before {
        top: 10px;
        left: -13px;
      }
    }
  }
`;

export const Text = styled.p`
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
