import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StyledIcon, StyledLink, Wrapper } from './ButtonLink.styles';

interface BTProps {
  children: string;
  to: string;
  icon: IconDefinition;
}

const ButtonLink: React.FC<BTProps> = (props) => {
  return (
    <Wrapper>
      <StyledLink href={props.to} target='_blank'>
        <StyledIcon  icon={props.icon as IconDefinition}/>
        {props.children}
      </StyledLink>
    </Wrapper>
  )
}

export default ButtonLink