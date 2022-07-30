import React from 'react'
import { StyledText } from './Text.styles';
interface TextProps {
  children: string;
}

const Text: React.FC<TextProps> = (props) => {
  return (
    <StyledText>
      {props.children}
    </StyledText>
  )
}

export default Text