import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled from 'styled-components';
import { device } from '../../../theme/sizes';
import Image from '../../atoms/Image/Image';

export const Wrapper = styled(motion.div)`
  border: 1px solid ${props => rgba(props.theme.colors.light, .3)};
  border-radius: ${props => props.theme.radius.smallRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  @media screen and (${device.mobileS}) {
    height: 90vh;
  }
  @media screen and (${device.mobileM}) {
    height: 70vh;
  }
  @media screen and (${device.mobileL}) {
    width: 80%;
    height: 70vh;
  }
  @media screen and (${device.laptop}) {
    width: 75%;
    height: 50vh;
    display: grid;
    grid-template:
      [row1-start] 'image text' auto [row1-end]
      [row2-start] 'image buttons' 30% [row2-end]
      / 60% auto
    ;
    place-items: center;
  }
`;

export const TextSection = styled.section`
  width: 80%;
  @media screen and (${device.mobileS}) {
    font-size: calc(${props => props.theme.fontSizes.m} * 1.15);
  }
  @media screen and (${device.mobileL}) {
    font-size: ${props => props.theme.fontSizes.l};
  }
  @media screen and (${device.laptop}) {
    grid-area: text;
    font-size: calc(${props => props.theme.fontSizes.l} * 1.25);
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (${device.laptop}) {
    grid-area: buttons;
  }
`;

export const CardImage = styled(Image)`
  @media screen and (${device.laptop}) {
    grid-area: image;
  }
`;