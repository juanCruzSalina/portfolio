import React from 'react'
import { StyledHeading } from './Heading.styles';

interface HeadingProps {
  children: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <StyledHeading>
      {props.children}
    </StyledHeading>
  )
}

export default Heading