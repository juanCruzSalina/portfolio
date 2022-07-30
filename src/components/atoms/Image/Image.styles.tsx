import styled from 'styled-components';
import { device } from '../../../theme/sizes';
import { ImageProps } from './Image';

export const Wrapper = styled.div<Pick<ImageProps, 'size'>>`
  border-radius: ${props => props.theme.radius.rounded};
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
  @media screen and (${device.mobileS}) {
     width: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 'fit-content' : 2 });
    height: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 1.75 : 1.45});
  }
  @media screen and (${device.mobileM}) {
    width: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 'fit-content' : 2.5});
    height: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 2.5 : 1.5});
  }
  @media screen and (${device.mobileL}) {
    width: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 'fit-content' : 4});
    height: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 2 : 2.5});
  }
  @media screen and (${device.laptop}) {
     width: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 'fit-content' : 4.5});
    height: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 2.75 : 2.75});
  }
`;
