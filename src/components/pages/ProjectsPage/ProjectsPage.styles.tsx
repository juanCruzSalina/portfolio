import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InfoContent = styled.main<{cards: number}>`
  height: calc(100% * (${props => props.cards} * 1.5));
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextContainer = styled(motion.section)`
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
`;

export const IconButton = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.light};
  margin-top: ${props => props.theme.spacing.xs};
`;
