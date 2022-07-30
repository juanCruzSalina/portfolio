import React from 'react'
import { Wrapper } from './Image.styles';
export interface ImageProps {
  src: string;
  alt: string;
  size: 'avatar' | 'miniature'
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <Wrapper {...props}>
      <img alt={props.alt} src={props.src}/>
    </Wrapper>
  )
}

export default Image