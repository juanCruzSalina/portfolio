import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeading = styled(motion.h2)`
  font-weight: 400;
  color: ${(props) => props.theme.colors.light};
`;