import React from 'react'
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';

interface BTProps {
  children: string;
  to: string;
  icon: IconDefinition;
}

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: fit-content;
  border-radius: ${props => props.theme.radius.smallRadius};
  padding: ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.xs};
  border: 1px solid ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.m};
  background-color: ${props => props.theme.colors.primary};
  transition: all ease-in .2s;
  cursor: pointer;
  &:hover {
    background-color: ${props => rgba(props.theme.colors.primary, 0.5)};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontSizes.l};
  margin-right: ${props => props.theme.measures.xxs};
`;

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