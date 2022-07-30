import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import CardsGroup from './CardsGroup'

describe('Cards group container tests', () => {
  test('should render properly', () => {
    const testCards = [
      {
        title: 'Project Name 1',
        projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
        imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
        repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
        demoLink: 'https://giff-art.netlify.app/'
      },
    ]
    render(
      <CardsGroup cards={testCards}/>
    )
    expect(screen.getByText(/repository/i)).toBeInTheDocument()
  })

  test('should have x amount of cards', () => {
    const testCards = [
      {
        title: 'Project Name 1',
        projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
        imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
        repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
        demoLink: 'https://giff-art.netlify.app/'
      },
      {
        title: 'Project Name 2',
        projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
        imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
        repoLink: 'https://github.com/juanCruzSalina/giff-art-expert1',
        demoLink: 'https://giff-art.netlify.app/'
      },
      {
        title: 'Project Name 3',
        projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
        imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
        repoLink: 'https://github.com/juanCruzSalina/giff-art-expert2',
        demoLink: 'https://giff-art.netlify.app/'
      },
    ]
    render(
      <CardsGroup cards={testCards}/>
    )
    expect(screen.getAllByText(/repository/i).length).toBe(3)
  })
})