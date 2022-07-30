import React from 'react'
import PersonalInfo from '../../molecules/PersonalInfo/PersonalInfo'
import UIStructure from '../../organisms/UIStructure/UIStructure'
import { BoxContainer, IconsBox, InfoContent, SkillBox } from './InfoPage.styles'
import { faCss3, faFacebook, faHtml5, faInstagram, faJava, faJsSquare, faLinkedin, faPython } from '@fortawesome/free-brands-svg-icons'
import Heading from '../../atoms/Heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from '../../atoms/Text/Text'

const InfoPage: React.FC = () => {
  const personalInfo = {
    info: 'I learned web development through courses on Udemy, Youtube, and other sources. Always willing to learn something new and expand in the world of programming in general.',
    imageURL: 'https://res.cloudinary.com/dnmune6oc/image/upload/v1659056807/y7po5o6mbzcpeif0kdak.jpg',
    icons: [
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/shadowsilverkin/'
      },
      {
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/juan-cruz-salina-a74473179/'
      },
      {
        icon: faFacebook,
        url: 'https://www.facebook.com/profile.php?id=100075758307155'
      }
    ]
  }

  const technologies = {
    languages: [
      faHtml5, faJsSquare, faPython, faJava, faCss3
    ],
    libraries: [
      'Typescript',
      'React',
      'NextJS',
      'React-Redux',
      'React-Router',
      'Formik',
      'React-hook-form',
      'Styled-Components',
      'Sass',
      'Framer-Motion',
      'Animate-CSS',
      'Material-UI',
      'Firebase',
      'Jest',
      'React-Testing-Library'
    ],
    tools: [
      'Storybook',
      'Git/Github',
      'Postman',
      'Figma',
      'Jira'
    ]
  }

  return (
    <UIStructure>
      <InfoContent>
        <PersonalInfo  {...personalInfo}/>
        <BoxContainer>
          <SkillBox>
            <Heading>
              Languages I know:
            </Heading>
            <IconsBox>
              {technologies.languages.map(icon => <FontAwesomeIcon size='2x' key={icon.iconName} icon={icon}/>)}
            </IconsBox>
          </SkillBox>
          <SkillBox>
          <Heading>
              Libraries I've used:
            </Heading>
            <IconsBox>
              {technologies.libraries.map(lib => <Text key={lib}>{lib}</Text>)}
            </IconsBox>
          </SkillBox>
          <SkillBox>
          <Heading>
              Tools I've learnt:
            </Heading>
            <IconsBox>
            {technologies.tools.map(tool => <Text key={tool}>{tool}</Text>)}
            </IconsBox>
          </SkillBox>
        </BoxContainer>
      </InfoContent>
    </UIStructure>
  )
}

export default InfoPage