import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconContainer, IconLink, InfoText, Wrapper,  } from './PersonalInfo.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';

type IconObject = {
  icon: IconDefinition;
  url: string;
}

interface CardInfo {
  info: string;
  imageURL: string;
  icons: IconObject[]
}

const PersonalInfo: React.FC<CardInfo> = (props) => {
  return (
    <Wrapper>
      <Image src={props.imageURL} alt={'avatar-alt'} size='avatar' />
      <InfoText>
        <Text>
          {props.info}
        </Text>
      </InfoText>
      <IconContainer>
        {props.icons.map(icon =>
          <IconLink key={Math.random()} href={icon.url} target={'_blank'}>
            <FontAwesomeIcon size='2x' icon={icon.icon as IconDefinition}/>
          </IconLink>
        )}
      </IconContainer>
    </Wrapper>
  )
}

export default PersonalInfo