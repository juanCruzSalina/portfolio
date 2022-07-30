import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import ProjectCard from './ProjectCard'

describe('Project Card component tests', () => {
  test('should render properly', () => {
    const testCard = {
      title: 'Example Card',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
      imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
      repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
      demoLink: 'https://giff-art.netlify.app/'
    }
    render(
      <ProjectCard {...testCard}/>
    )
    expect(screen.getByText(/repository/i)).toBeInTheDocument()
  })
})