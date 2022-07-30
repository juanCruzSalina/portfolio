import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { device } from "../../../theme/sizes";

export const Wrapper = styled.nav`
  width: 100%;
  height: 12.5%;
  display: flex;
  position: relative;
  @media screen and (${device.laptop}) {
    justify-content: space-between;
  }
`;

export const HomeNav = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  @media screen and (${device.laptop}) {
    width: 20%;
    justify-content: center;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.light};
  cursor: pointer;
  @media screen and (${device.mobileS}) {
    font-size: calc(${(props) => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.mobileM}) {
    font-size: calc(${(props) => props.theme.fontSizes.m} * 1.5);
  }
  @media screen and (${device.mobileL}) {
    font-size: calc(${(props) => props.theme.fontSizes.l} * 1.15);
  }
  @media screen and (${device.laptop}) {
    display: none;
  }
`;


export const SecondMenu = styled.section<{show: boolean}>`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  display: grid;
  grid-template:
    [row1-start] 'close . .' 12.5% [row1-end]
    [row2-start] 'menu menu menu' 50% [row2-end]
    / 25% auto 10%
  ;
  place-items: center;
  left: -100%;
  transition: all .2s ease-in;
  transform: ${props => props.show ? 'translateX(100%)' : null};
  @media screen and (${device.laptop}) {
    background-color: ${props => props.theme.colors.secondary};
    width: 50%;
    height: 100%;
    position: static;
    display: flex;
  }
`;

export const LinkLine = styled.span`
  height: 1px;
  width: 70%;
  background-color: ${props => props.theme.colors.light};
  @media screen and (${device.laptop}) {
    display: none;
  }
`;

export const NavGroup = styled.ul`
  width: 100%;
  height: 100%;
  grid-area: menu;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (${device.laptop}) {
    flex-direction: row;
  }
`;

export const CloseIcon = styled(MenuIcon)`
  grid-area: close;
`;