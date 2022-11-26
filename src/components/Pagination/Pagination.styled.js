import styled from 'styled-components';

export const Wrap = styled.div`
  width: 396px;
  height: 40px;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f9fafd;
  border-radius: ${p => p.theme.radii.normal};

  @media screen and (min-width: 1400px) {
    width: 515px;
    height: 52px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  position: relative;

  ::after {
    position: absolute;
    bottom: -4px;
    left: 0px;
    content: '';
    display: ${({ currentPage }) => {
      if (currentPage) {
        return 'block';
      } else {
        return 'none';
      }
    }};
    width: 100%;
    height: 3px;
    background-color: ${p => p.theme.colors.accentColor};
    border-radius: 2px;
  }
`;

export const Btn = styled.button`
  width: 31px;
  height: 31px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 20.8px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.73333px;
  color: #70778b;
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.firstBtnBg};
  }
`;
