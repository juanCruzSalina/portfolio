import React from 'react'
import { Variants } from 'framer-motion';
import { ButtonSection, TextSection, Wrapper, CardImage } from './ProjectCard.styles';
import ButtonLink from '../../atoms/ButtonLink/ButtonLink';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export interface CardProps {
  title: string;
  projectDesc: string;
  imageURL: string;
  repoLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<CardProps> = (props) => {

  const cardVariants: Variants = {
    offscreen: {
      x: -300,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.9
      }
    },
  };

  return (
    <Wrapper
      initial={'offscreen'}
      whileInView={'onscreen'}
      variants={cardVariants}
      viewport={{ once: false }}
    >
      <CardImage src={props.imageURL} size={'miniature'} alt={`${props.title}-alt`}/>
      <TextSection>
        <Heading>
          {props.title}
        </Heading>
        <Text>
          {props.projectDesc}
        </Text>
      </TextSection>
      <ButtonSection>
        <ButtonLink to={props.repoLink} icon={faGithub}>
          Repository
        </ButtonLink>
        <ButtonLink to={props.demoLink} icon={faGlobe}>
          Demo
        </ButtonLink>
      </ButtonSection>
    </Wrapper>
  )
}

export default ProjectCard