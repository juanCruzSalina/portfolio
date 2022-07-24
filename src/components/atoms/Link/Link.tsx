import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


interface LinkProps {
  children: string;
  to: string;
  icon?: IconDefinition
};

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;
  transition: all ease-in .2s;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.m};
  &:active {
    text-decoration: underline solid ${(props) => props.theme.colors.light};
  }
`;

const LinkText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.l};
  margin-left: ${(props) => props.theme.measures.xxs};
`;

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