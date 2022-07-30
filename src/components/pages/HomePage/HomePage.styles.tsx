import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../../../theme/sizes";
import { motion } from "framer-motion";

export const PageContent = styled(motion.main)`
  height: 87.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (${device.laptop}) {
    flex-direction: row;
  };
`;

export const HomeHeading = styled(motion.section)`
  @media screen and (${device.mobileS}) {
    font-size: ${props => props.theme.fontSizes.xl};
    width: 70%;
    text-align: center;
  }
  @media screen and (${device.mobileM}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media screen and (${device.mobileM}) {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
  @media screen and (${device.laptop}) {
    font-size: ${props => props.theme.fontSizes.xxl};
    width: 20%;
  }
`;


export const HomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors["grey-600"]};
  @media screen and (${device.mobileS}) {
    margin-bottom: ${props => props.theme.spacing.s};
    font-size: calc(${props => props.theme.fontSizes.xxl} * 3);
  }
  @media screen and (${device.mobileM}) {
    margin-bottom: ${props => props.theme.spacing.s};
    font-size: calc(${props => props.theme.fontSizes.xxl} * 3);
  }
  @media screen and (${device.mobileL}) {
    margin-bottom: ${props => props.theme.spacing.s};
    font-size: calc(${props => props.theme.fontSizes.xxl} * 4);
  }
  @media screen and (${device.laptop}) {
    font-size: calc(${props => props.theme.fontSizes.xxl} * 4);
    margin-bottom: 0;
  }
`;
