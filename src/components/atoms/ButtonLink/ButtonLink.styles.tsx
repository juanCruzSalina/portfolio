import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';
import styled from 'styled-components';
import { device } from '../../../theme/sizes';

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: fit-content;
  border-radius: ${props => props.theme.radius.smallRadius};
  border: 1px solid ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.primary};
  transition: all ease-in .2s;
  cursor: pointer;
  &:hover {
    background-color: ${props => rgba(props.theme.colors.primary, 0.5)};
  }
  @media screen and (${device.mobileS}) {
    padding:
      calc(${(props) => props.theme.spacing.xxs} * .55)
      calc(${(props) => props.theme.spacing.xs} * .55)
    ;
    font-size: ${props => props.theme.fontSizes.s};
  };
  @media screen and (${device.mobileM}) {
    padding:
      calc(${(props) => props.theme.spacing.xxs} * .65)
      calc(${(props) => props.theme.spacing.xs} * .65)
    ;
    font-size: ${props => props.theme.fontSizes.m};
  }
  @media screen and (${device.mobileL}) {
    padding:
      calc(${(props) => props.theme.spacing.xxs} * .75)
      calc(${(props) => props.theme.spacing.xs} * .75)
    ;
    font-size: calc(${props => props.theme.fontSizes.m} * 1.15);
  }
  @media screen and (${device.desktop}) {
    padding:
      ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.xs}
    ;
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
  }

`;

export const StyledIcon = styled(FontAwesomeIcon)`
  @media screen and (${device.mobileS}) {
    font-size: ${props => props.theme.fontSizes.m};
    margin-right: calc(${props => props.theme.measures.xxs} * .75);
  }
  @media screen and (${device.mobileM}) {
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
    margin-right: calc(${props => props.theme.measures.xxs} * .75);
  }
  @media screen and (${device.mobileL}) {
    font-size: calc(${props => props.theme.fontSizes.m} * 1.35);
    margin-right: calc(${props => props.theme.measures.xxs} * .75);
  }
  @media screen and (${device.laptop}) {
    font-size: ${props => props.theme.fontSizes.l};
    margin-right: ${props => props.theme.measures.xxs};
  }
`;