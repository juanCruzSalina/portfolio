import React from 'react'
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  size: 'avatar' | 'miniature'
}

const Wrapper = styled.div<Pick<ImageProps, 'size'>>`
  width: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 2 : 4});
  height: calc(${props => props.theme.measures.xxl} * ${props => (props.size === 'avatar') ? 2 : 2.5});
  border-radius: ${props => props.theme.radius.rounded};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image: React.FC<ImageProps> = (props) => {
  return (
    <Wrapper {...props}>
      <img alt={props.alt} src={props.src}/>
    </Wrapper>
  )
}

export default Image