import React from 'react'
import styled from 'styled-components';

interface TextProps {
  children: string;
  size: 'sm' | 'md' | 'lg'
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.theme.colors.light};
  font-size: ${
    (props) => (props.size === 'sm')
      ? props.theme.fontSizes.m
      : (props.size === 'md')
      ? props.theme.fontSizes.l
      : props.theme.fontSizes.xl
  };
`;

const Text: React.FC<TextProps> = (props) => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}

export default Text