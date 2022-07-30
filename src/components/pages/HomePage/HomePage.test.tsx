import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import HomePage from './HomePage'

describe('Home page tests', () => {
  test('should render properly', () => {
    render(
      <HomePage />
    )
    expect(screen.getByText(/Front-end Developer/i)).toBeInTheDocument()
  })
})