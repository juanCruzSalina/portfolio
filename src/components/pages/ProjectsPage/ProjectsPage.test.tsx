import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import ProjectsPage from './ProjectsPage'

describe('Project Page tests', () => {
  test('should render properly', () => {
    render(
      <ProjectsPage />
    )
    expect(screen.getByText(/project name 1/i)).toBeInTheDocument()
  })
})