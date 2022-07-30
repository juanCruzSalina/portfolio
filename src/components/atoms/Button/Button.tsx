import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StyledButton, StyledIcon } from './Button.styles';

interface ButtonProps {
  children: string;
  icon?: IconDefinition;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton type='submit'>
      {props.icon && <StyledIcon icon={props.icon as IconDefinition}/>}
      {props.children}
    </StyledButton>
  )
}

export default Button