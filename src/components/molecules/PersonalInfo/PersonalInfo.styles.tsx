import styled from 'styled-components';
import { device } from '../../../theme/sizes';

export const Wrapper = styled.div`
  border: 1px solid white;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: ${props => props.theme.radius.smallRadius};
  @media screen and (${device.mobileS}) {
    height: 100vh;
  }
  @media screen and (${device.mobileM}) {
    height: 80vh;
  }
  @media screen and (${device.mobileL}){
    width: 50%;
    height: 50vh;
  }
  @media screen and (${device.laptop}){
    width: 30%;
    height: 70vh;
  }
`;

export const IconContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (${device.laptop}){
    width: 50%;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.light};
  transition: all .2s ease-in;
  &:hover {
    color: ${props => props.theme.colors['grey-400']};
  }
  @media screen and (${device.mobileM}) {
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.laptop}){
    font-size: calc(${props => props.theme.fontSizes.m} * 1.5);
  }

`;

export const InfoText = styled.section`
  text-align: center;
  @media screen and (${device.mobileS}){
    width: 80%;
    font-size: calc(${props => props.theme.fontSizes.m});
  }
  @media screen and (${device.mobileM}){
    width: 80%;
    font-size: calc(${props => props.theme.fontSizes.m} * 1.25);
  }
  @media screen and (${device.laptop}){
    width: 60%;
    font-size: calc(${props => props.theme.fontSizes.m} * 1.5);
  }
`;