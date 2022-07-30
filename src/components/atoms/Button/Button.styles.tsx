import styled from 'styled-components';
import { rgba } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledButton = styled.button`
  padding: ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.fontSizes.m};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  border: solid 1px ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.radius.smallRadius};
  cursor: pointer;
  transition: all ease-in .3s;
  &:hover{
    background-color: ${(props) => rgba(props.theme.colors.primary, 0.8)};
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: ${props => props.theme.measures.xxs};
`;