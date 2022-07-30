import { rgba } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../theme/sizes";

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;
  transition: all ease-in .2s;
  display: flex;
  align-items: center;
  transition: all .2s ease-in;
  &:active {
    text-decoration: underline solid ${(props) => props.theme.colors.light};
  }
  &:hover {
    color: ${(props) => rgba(props.theme.colors['grey-700'], .7)};
  }
  @media screen and (${device.mobileS}) {
    font-size: calc(${(props) => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.mobileM}) {
    font-size: calc(${(props) => props.theme.fontSizes.l} * 1.5);
  }
  @media screen and (${device.laptop}) {
    font-size: calc(${(props) => props.theme.fontSizes.l} * 1.15);
  }
`;

export const LinkText = styled.p`
  margin-left: ${(props) => props.theme.fontSizes.xs};
`;