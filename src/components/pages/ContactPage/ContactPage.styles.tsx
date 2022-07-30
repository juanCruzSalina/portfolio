import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../theme/sizes';

export const ContactContainer = styled(motion.main)`
  display: flex;
  @media screen and (${device.mobileS}) {
    height: 150vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (${device.mobileM}){
    height: 87.5%;
  }
  @media screen and (${device.laptop}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 87.5%;
  }
`;

export const ContactData = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media screen and (${device.mobileS}) {
    height: 20%;
    width: 80%;
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.mobileM}) {
    width: 40%;
    align-items: center;
  }
  color: ${props => props.theme.colors.light};
  @media screen and (${device.laptop}) {
    height: 30%;
    width: 20%;
    align-items: flex-start;
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const IconText = styled.section`
  display: flex;
  align-items: center;
`;

