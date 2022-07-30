import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.secondary};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;