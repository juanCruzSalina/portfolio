import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { LinkText, StyledLink } from './Link.styles';
interface LinkProps {
  children: string;
  to: string;
  icon?: IconDefinition
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <StyledLink {...props}>
      {props.icon && <FontAwesomeIcon icon={props.icon as IconDefinition} />}
      <LinkText>
        {props.children}
      </LinkText>
    </StyledLink>
  )
};

export default Link