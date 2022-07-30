import styled from 'styled-components';
import { Form } from 'formik';
import { motion } from 'framer-motion';
import { device } from '../../../theme/sizes';

export const FormWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${props => props.theme.spacing.xs};
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.radius.smallRadius};
  @media screen and (${device.mobileS}) {
    height: 90vh;
    width: 80%;
  }
  @media screen and (${device.mobileM}) {
    height: 60vh;
  }
  @media screen and (${device.mobileL}) {
    height: 50vh;
    width: 50%;
  }
  @media screen and (${device.laptop}){
    height: 60%;
    width: 20%;
    font-size: calc(${props => props.theme.fontSizes.l} * .75);
  }
`;

export const StyledForm = styled(Form)`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (${device.laptop}) {
    width: 90%;
    height: 100%;
  }
`;