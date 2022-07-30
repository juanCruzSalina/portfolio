import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Navbar from './Navbar'

describe('Navbar component tests', () => {
  test('should render properly', () => {
    render(
      <Navbar />
    )
    expect(screen.getByText('Juan Cruz Salina')).toBeInTheDocument()
  })
})