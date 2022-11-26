import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.21;
  letter-spacing: 0.413333px;
  color: ${p => p.theme.colors.titleText};

  ::after {
    position: absolute;
    bottom: -8px;
    left: -9px;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.titleText};
    border-radius: 50%;
  }

  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const ContactWrap = styled.div`
  width: 372px;
  height: 436px;
  margin-top: 32px;
  background-color: #2a3047;
  border-radius: ${p => p.theme.radii.normal};

  @media screen and (min-width: 1400px) {
    margin-top: 0;
  }
`;

export const DescriptionWrap = styled.div`
  width: 372px;
  height: 218px;
  padding: 31px 64px;
`;

export const Name = styled.h3`
  margin-bottom: 17px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.19;
  letter-spacing: 0.23619px;
  color: #e7eaf0;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const Address = styled.p`
  margin-left: 8px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #e7eaf0;
`;

export const Links = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.669635);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondBtnText};
  }
`;
