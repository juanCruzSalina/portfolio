import React from 'react'
import ProjectCard, { CardProps } from '../../molecules/ProjectCard/ProjectCard'
import { CardsContainer } from './CardsGroup.styles'

interface CardsGroupProps {
  cards: CardProps[]
}

const CardsGroup: React.FC<CardsGroupProps> = (props) => {
  const totalCards = props.cards.length

  return (
    <CardsContainer cards={totalCards}>
      {props.cards.map(card => <ProjectCard key={card.repoLink} {...card}/>)}
    </CardsContainer>
  )
}

export default CardsGroup