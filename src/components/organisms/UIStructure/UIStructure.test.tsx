import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import UIStructure from './UIStructure'

describe('UI Structure tests', () => {
  test('should render properly', () => {
    render(
      <UIStructure>
        <h1>test unit</h1>
      </UIStructure>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
  test('should render Navbar component', () => {
    render(
      <UIStructure>
        <h1>test unit</h1>
      </UIStructure>
    )
    expect(screen.getByRole('link', {name: 'Juan Cruz Salina'})).toBeInTheDocument()
  })
})