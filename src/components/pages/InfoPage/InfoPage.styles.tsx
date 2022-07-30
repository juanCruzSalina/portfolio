import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../theme/sizes';

export const InfoContent = styled(motion.main)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (${device.mobileS}) {
    flex-direction: column;
  }
  @media screen and (${device.laptop}) {
    height: 87.5%;
    flex-direction: row;
  }
`;

export const BoxContainer = styled(motion.section)`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (${device.mobileS}) {
    margin: ${props => props.theme.measures.m} 0;
  }
  @media screen and (${device.laptop}) {
    height: 90%;
    width: 40%;
    justify-content: space-evenly;
    margin: 0;
  }
`;

export const SkillBox = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.xxs};
  width: 100%;
  border-radius: ${props => props.theme.radius.smallRadius};
  border: 1px solid ${props => props.theme.colors.light};
  @media screen and (${device.mobileS}) {
    margin: ${props => props.theme.measures.m} 0;
  }
  @media screen and (${device.laptop}) {
    margin: 0;
  }
`;

export const IconsBox = styled(motion.section)`
  display: flex;
  margin-top: ${props => props.theme.measures.xs};
  font-size: ${props => props.theme.fontSizes.m};
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: ${props => props.theme.spacing.xxs};
  width: 100%;
  @media screen and (${device.mobileS}) {
    color: ${props => props.theme.colors.light};
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.laptop}) {
    margin-top: ${props => props.theme.measures.m};
  }
`;