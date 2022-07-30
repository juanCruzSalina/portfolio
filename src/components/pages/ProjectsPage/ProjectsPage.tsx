import React from 'react'
import { IconButton, InfoContent, TextContainer } from './ProjectsPage.styles'
import UIStructure from '../../organisms/UIStructure/UIStructure'
import CardsGroup from '../../organisms/CardsGroup/CardsGroup'
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import Heading from '../../atoms/Heading/Heading'

const cards = [
  {
    title: 'Alliance Website',
    projectDesc: 'Small website designed to simulate a blog for the game Neverwinter. Made with HTML, CSS and JavaScript.',
    imageURL: 'https://res.cloudinary.com/dnmune6oc/image/upload/v1659142218/l2uodqhi1ofp9900mkrj.jpg',
    repoLink: 'https://github.com/juanCruzSalina/alliance-page',
    demoLink: 'https://juancruzsalina.github.io/alliance-page/'
  },
  {
    title: 'Journal-App',
    projectDesc: 'Online journal designed to save entries with or without images. Made with React, Typescript, Material-UI. Uses Firebase auth and Firestore. Cloudnary for image storage.',
    imageURL: 'https://res.cloudinary.com/dnmune6oc/image/upload/v1659142470/zhltimij0p3g9smkm7eg.png',
    repoLink: 'https://github.com/juanCruzSalina/journal-app',
    demoLink: 'https://journal-app-site.netlify.app'
  },
  {
    title: 'Giff-Art-Expert',
    projectDesc: 'Gif searcher that uses fetch API and Gyphy app to get those gifs.',
    imageURL: 'https://res.cloudinary.com/dnmune6oc/image/upload/v1659142718/apfivbuhk7pywonnkdbc.png',
    repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
    demoLink: 'https://giff-art.netlify.app/'
  },
]

const ProjectsPage: React.FC = () => {

  const handleReturn = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <UIStructure>
      <InfoContent cards={cards.length}>
        <TextContainer>
          <Heading>
            These are the projects I've worked to learn web development
          </Heading>
          <IconButton icon={faArrowCircleDown} size={'2x'}/>
        </TextContainer>
        <CardsGroup cards={cards}/>
        <TextContainer>
          <Heading>
            These are the projects I've worked to learn web development
          </Heading>
          <IconButton icon={faArrowAltCircleUp} size={'2x'} onClick={handleReturn}/>
        </TextContainer>
      </InfoContent>
    </UIStructure>
  )
}

export default ProjectsPage