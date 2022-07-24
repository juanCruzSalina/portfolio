import React from 'react'
import styled from 'styled-components';

interface HeadingProps {
  children: string;
  size: 'sm' | 'md' | 'lg'
}

const StyledHeading = styled.h2<HeadingProps>`
  font-weight: 400;
  font-size: ${
    (props) => (props.size === 'sm')
      ? props.theme.fontSizes.l
      : (props.size === 'md')
      ? props.theme.fontSizes.xl
      : props.theme.fontSizes.xxl
  };
  color: ${(props) => props.theme.colors.light};
`;

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <StyledHeading {...props}>
      {props.children}
    </StyledHeading>
  )
}

export default Heading